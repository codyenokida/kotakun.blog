/**
 * Helper Firestore APIs
 */
// import emailjs from "@emailjs/browser";
import {
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  deleteDoc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "./firebase";

import { getBlogPosts } from "@/app/blog/utils";

/**
 * Function to post a comment given an ID, author, and content
 *
 * @param {string} id
 * @param {string} author
 * @param {string} content
 */
export async function postComment(
  id: string,
  author: string,
  content: string,
  parentId: string = "",
  email?: string
) {
  if (!author) {
    throw "Comment needs an Author.";
  }
  if (!content) {
    throw "Comment needs content";
  }
  if (!id) {
    throw "Error: No post id";
  }

  // Relevant information needed
  const timestamp = new Date();
  const commentId = uuidv4();

  // Check if the document exists
  const postRef = doc(db, "new-comments", id);
  const docSnap = await getDoc(postRef);

  if (docSnap.exists()) {
    // If the document exists, update it
    await updateDoc(postRef, {
      [`${commentId}`]: {
        commentId,
        parentId,
        author,
        content,
        email,
        timestamp,
      },
    });
  } else {
    // If the document doesn't exist, create it
    await setDoc(postRef, {
      id,
      [`${commentId}`]: {
        commentId,
        parentId,
        author,
        content,
        email,
        timestamp,
      },
    });
  }
}

export async function getComments(id: string) {
  const postRef = doc(db, "new-comments", id);
  const docSnap = await getDoc(postRef);
  const data = docSnap.data() as { [key: string]: BlogCommentFromFirestore };
  const newComments: BlogCommentFromFirestore[] = Object.values(data) || [];
  return newComments;
}

export async function addToEmaiList(name: string, email: string) {
  const emailListDocRef = doc(db, "email-list", email);

  const collectionObj = {
    name,
    email,
  };

  setDoc(emailListDocRef, { ...collectionObj }, { merge: true });
}

// export async function sendEmailSubscribed(name: string, email: string) {
//   const templateParams = {
//     recipient: email,
//     to_name: name,
//   };
//   try {
//     await emailjs.send(
//       process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
//       "blog-sub",
//       templateParams,
//       process.env.NEXT_PUBLIC_EMAIL_API_KEY
//     );
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function unsubscribeFromEmailList(email: string) {
  try {
    const emailListDocRef = doc(db, "email-list", email);
    deleteDoc(emailListDocRef);
  } catch (error) {
    console.error(error);
  }
}

/**
 * migration scripts
 */

// export async function migrateComments(oldId: string, newId: string) {
//   const oldPostRef = doc(db, "comments", oldId);
//   const newPostRef = doc(db, "comments", newId);

//   const docSnap = await getDoc(oldPostRef);
//   const oldCommentData = docSnap.data() as BlogCommentFromFirestore;

//   // Atomically add a new comment to the "comments" array field.
//   await updateDoc(newPostRef, {
//     comments: oldCommentData.comments,
//     id: newId,
//   });
// }

// Example usage:
// const comments: CommentArray = [
//   {
//     author: "John Doe",
//     content: "Great article!",
//     datePosted: new Date()
//   },
//   {
//     author: "Jane Smith",
//     content: "Thanks for sharing this information.",
//     datePosted: new Date()
//   }
// ];

export async function migrateCommentsToNewStructure() {
  async function getBlogPostSlugs(): Promise<string[]> {
    try {
      const commentsCollection = collection(db, "comments");
      const snapshot = await getDocs(commentsCollection);

      const slugs: string[] = [];
      snapshot.forEach((doc) => {
        slugs.push(doc.id);
      });

      return slugs;
    } catch (error) {
      console.error("Error fetching blog post slugs:", error);
      return [];
    }
  }

  const posts = await getBlogPostSlugs();

  for (const slug of posts) {
    const oldCommentsRef = doc(db, "comments", slug);
    const oldCommentsSnap = await getDoc(oldCommentsRef);

    if (oldCommentsSnap.exists()) {
      const oldComments = oldCommentsSnap.data().comments || [];

      const newCommentsMap: { [key: string]: any } = {};
      oldComments.forEach(
        (comment: BlogCommentFromFirestore, index: number) => {
          const commentId = uuidv4();
          newCommentsMap[`${commentId}`] = {
            author: comment.author,
            email: comment.email || null,
            content: comment.content,
            timestamp: comment.timestamp,
            parentCommentId: comment.parentId || null,
            commentId,
          };
        }
      );

      const newCommentsRef = doc(db, "new-comments", slug);
      await setDoc(newCommentsRef, {
        id: slug,
        ...newCommentsMap,
      });

      console.log(`Migrated comments for slug: ${slug}`);
    } else {
      console.log(`No comments found for slug: ${slug}`);
    }
  }

  console.log("Comment migration completed.");
}

// Uncomment and run this function to perform the migration
// migrateCommentsToNewStructure();
