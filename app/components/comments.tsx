"use client";

import { useEffect, useRef, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { postComment } from "@/app/lib/firebase/firestore";
import { db } from "@/app/lib/firebase/firebase";
import { migrateCommentsToNewStructure } from "@/app/lib/firebase/firestore";

import LoadingCommentSkeleton from "@/app/components/comments-loading-skeleton";

const sendReplyNotification = async (
  slug: string,
  author: string,
  content: string,
  parentId: string,
  email: string
) => {
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
      author,
      content,
      parentId,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send reply notification");
  }
};

const organizeComments = (
  newComments: BlogCommentFromFirestore[]
): BlogComment[] => {
  // 1. Formats the comment to match the type
  const formattedComments: BlogComment[] = newComments.map((comment) => ({
    ...comment,
    timestamp: comment.timestamp.toDate(),
    replies: [],
  }));

  // 2. Organize comments into a hierarchical structure
  const organizedComments: BlogComment[] = [];
  const commentMap: { [key: string]: BlogComment } = {};

  // First pass: Create a map of all comments
  formattedComments.forEach((comment) => {
    const commentId =
      comment.commentId ||
      comment.author + comment.timestamp.valueOf().toString();
    commentMap[commentId] = { ...comment, commentId, replies: [] };
  });

  // Second pass: Organize comments into hierarchy
  formattedComments.forEach((comment) => {
    if (comment.parentId && commentMap[comment.parentId]) {
      // This is a reply, add it to the parent's replies
      commentMap[comment.parentId].replies.push(commentMap[comment.commentId]);
      // Add parentAuthor to the reply
      commentMap[comment.commentId].parentAuthor =
        commentMap[comment.parentId].author;
    } else {
      // This is a top-level comment
      const commentId =
        comment.commentId ||
        comment.author + comment.timestamp.valueOf().toString();
      organizedComments.push(commentMap[commentId]);
    }
  });

  // Sort organizedComments by timestamp (earliest to latest)
  organizedComments.sort(
    (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
  );

  return organizedComments;
};

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [saveInfo, setSaveInfo] = useState<boolean>(false);
  const [replyTo, setReplyTo] = useState<BlogComment | null>(null);

  // Load comments from firestore
  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const unsub = onSnapshot(doc(db, "new-comments", slug), (doc) => {
        const data = doc.data() as { [key: string]: BlogCommentFromFirestore };
        const newComments: BlogCommentFromFirestore[] =
          data ? Object.values(data) : [];

        setComments(organizeComments(newComments));
        setIsLoading(false);
      });

      return () => unsub();
    }
  }, [slug]);

  // Load saved info from local storage
  useEffect(() => {
    const savedAuthor = localStorage.getItem("author");
    const savedEmail = localStorage.getItem("email");
    if (savedAuthor) setAuthor(savedAuthor);
    if (savedEmail) setEmail(savedEmail);
    if (savedAuthor || savedEmail) setSaveInfo(true);
  }, []);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const author = formData.get("author");
    const content = formData.get("content");
    const email = formData.get("email");

    setIsSubmitting(true);

    try {
      if (slug && author && content) {
        await postComment(
          slug,
          author.toString(),
          content.toString(),
          replyTo?.commentId,
          email?.toString()
        );
        setContent("");
        if (saveInfo) {
          localStorage.setItem("author", author.toString());
          localStorage.setItem("email", email?.toString() || "");
        } else {
          localStorage.removeItem("author");
          localStorage.removeItem("email");
        }
        setReplyTo(null);
        if (replyTo) {
          await sendReplyNotification(
            slug,
            author.toString(),
            content.toString(),
            replyTo.commentId,
            email?.toString() || ""
          );
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle reply button
  const handleReply = (comment: BlogComment) => {
    setReplyTo(comment);
    document.getElementById("content")?.focus();
  };

  // Handle rendering replies
  const renderReplies = (replies: BlogComment[]) => {
    return (
      replies &&
      replies.length > 0 && (
        <div className="ml-4">
          {replies.map((reply, j) => {
            const formattedReplyDate = reply.timestamp.toLocaleDateString();
            return (
              <div key={`${reply.author} ${reply.timestamp} ${j}`}>
                <article className="py-1">
                  <h4 className="font-semibold text-xl">
                    {reply.author} <span className="text-green">•</span>{" "}
                    <span className="text-gray-500 text-sm">
                      {formattedReplyDate}
                    </span>
                  </h4>
                  <p className="whitespace-pre-wrap">
                    <span className="font-patrick-hand-sc text-md font-bold text-blue">
                      @{reply.parentAuthor}
                    </span>{" "}
                    {reply.content}
                  </p>
                  {reply.email && (
                    <button
                      onClick={() => handleReply(reply)}
                      className="text-green text-sm mt-1 hover:underline"
                    >
                      Reply
                    </button>
                  )}
                </article>
                {renderReplies(reply.replies)}
              </div>
            );
          })}
        </div>
      )
    );
  };

  // Handle rendering comments
  const renderComments = (comments: BlogComment[]) => {
    return (
      <div>
        {comments.map((comment, i) => {
          const formattedDatePosted = comment.timestamp.toLocaleDateString();
          return (
            <div key={`${comment.author} ${comment.timestamp} ${i}`}>
              <article className="py-2">
                <h4 className="font-semibold text-xl">
                  {comment.author} <span className="text-green">•</span>{" "}
                  <span className="text-gray-500 text-sm">
                    {formattedDatePosted}
                  </span>
                </h4>
                <p className="mt-1 whitespace-pre-wrap">{comment.content}</p>
                {comment.email && (
                  <button
                    onClick={() => handleReply(comment)}
                    className="text-green text-sm mt-1 hover:underline"
                  >
                    Reply
                  </button>
                )}
              </article>
              {renderReplies(comment.replies)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Leave any thoughts or comments here!
      </h2>

      {isLoading ? (
        <LoadingCommentSkeleton />
      ) : comments.length === 0 ? (
        <p className="text-gray-600 mb-2">No comments, yet... chime in!</p>
      ) : (
        renderComments(comments)
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 my-4"
        id="comment-form"
      >
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-bold text-gray-700 font-patrick-hand-sc "
          >
            Name <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="filbert yeh"
            required
            className="mt-1 block w-full rounded-md border border-green-faded shadow-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green-faded px-2 py-1"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 font-patrick-hand-sc"
          >
            Email (receive notifications if mentioned)(optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="filbert@example.com"
            className="mt-1 block w-full rounded-md border border-green-faded shadow-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green-faded px-2 py-1"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-bold text-gray-700 font-patrick-hand-sc"
          >
            Comment <span className="text-red">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="that's so rad"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border border-green-faded shadow-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green-faded px-2 py-1"
          ></textarea>
          {replyTo && (
            <div className="text-sm text-gray-600">
              Replying to{" "}
              <strong className="font-patrick-hand-sc text-lg">
                {replyTo.author}
              </strong>{" "}
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-red hover:underline"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="saveInfo" className="text-sm text-gray-700">
            Save my name and email for the next time I comment
          </label>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out font-patrick-hand-sc transform hover:scale-105 hover:rotate-1"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
