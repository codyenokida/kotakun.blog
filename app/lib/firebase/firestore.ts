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
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "./firebase";

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
  const datePosted = new Date();
  const commentId = uuidv4();

  // Check if the document exists
  const postRef = doc(db, "comments", id);
  const docSnap = await getDoc(postRef);

  if (docSnap.exists()) {
    // If the document exists, update it
    await updateDoc(postRef, {
      comments: arrayUnion({
        commentId,
        parentId,
        author,
        content,
        email,
        datePosted,
      }),
    });
  } else {
    // If the document doesn't exist, create it
    await setDoc(postRef, {
      comments: [
        {
          commentId,
          parentId,
          author,
          content,
          email,
          datePosted,
        },
      ],
    });
  }
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
