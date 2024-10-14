import { NextResponse } from "next/server";
import { Resend } from "resend";
import { postComment, getComments } from "@/app/lib/firebase/firestore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { slug, author, content, parentId, email } = await request.json();

  try {
    // If this is a reply, send an email notification
    if (parentId) {
      const comments = await getComments(slug);
      const parentComment = comments.find(
        (comment) => comment.commentId === parentId
      );

      if (parentComment && parentComment.email) {
        await resend.emails.send({
          from: "kotakun.blog <noreply@updates.kotakun.blog>",
          to: parentComment.email,
          subject: "New reply to your comment!",
          html: `
            <p>Hello ${parentComment.author},</p>
            <p>${author} has replied to your comment:</p>
            <blockquote>${content}</blockquote>
            <p>Visit the <a href="https://kotakun.blog/blog/${slug}">blog post</a> to view the full conversation.</p>
          `,
        });
      }
    }

    return NextResponse.json(
      { message: "Comment posted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error posting comment:", error);
    return NextResponse.json(
      { error: "Error posting comment" },
      { status: 500 }
    );
  }
}
