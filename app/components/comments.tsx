"use client";

import { useEffect, useState } from "react";
import { postComment } from "@/app/lib/firebase/firestore";
import { db } from "@/app/lib/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const unsub = onSnapshot(doc(db, "comments", slug), (doc) => {
        const newComments: BlogCommentFromFirestore[] =
          doc.data()?.comments || [];
        const formattedComments: BlogComment[] = newComments.map((comment) => {
          return {
            author: comment.author,
            content: comment.content,
            datePosted: comment.datePosted.toDate() as Date,
          };
        });
        setComments(formattedComments);
        setIsLoading(false);
      });

      return () => unsub();
    }
  }, [slug]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const author = formData.get("author");
    const content = formData.get("content");

    try {
      if (slug && author && content) {
        await postComment(slug, author.toString(), content.toString());
        event.currentTarget.reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Leave any thoughts or comments here!
      </h2>

      {isLoading ? (
        <div className="space-y-2 my-6">
          {[...Array(3)].map((_, i) => (
            <article key={i} className="py-1 rounded-lg animate-pulse">
              <h4 className="font-semibold">
                <div className="inline-block h-4 w-24 bg-gray-300 rounded"></div>
                <span className="text-green mx-1">•</span>
                <span className="text-gray-500 text-sm">
                  <div className="inline-block h-4 w-32 bg-gray-300 rounded"></div>
                </span>
              </h4>
              <div className="mt-2 space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
            </article>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <p className="text-gray-600 mb-4">No comments, yet... chime in!</p>
      ) : (
        <div className="space-y-2 my-6">
          {comments.map((comment, i) => {
            const formattedDatePosted = comment.datePosted.toLocaleDateString();
            return (
              <article
                key={`${comment.author} ${comment.datePosted} ${i}`}
                className="py-1 rounded-lg"
              >
                <h4 className="font-semibold">
                  {comment.author} <span className="text-green">•</span>{" "}
                  <span className="text-gray-500 text-sm">
                    {formattedDatePosted}
                  </span>
                </h4>
                <p className="mt-2">{comment.content}</p>
              </article>
            );
          })}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Comment
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
