/**
 * Helper Firestore APIs
 */
// import emailjs from "@emailjs/browser";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "./firebase";

/**
 * Function to post a comment given and ID, author, and content
 *
 * @param {string} id
 * @param {string} author
 * @param {string} content
 */
export async function postComment(id: string, author: string, content: string) {
  if (!author) {
    throw "Comment needs an Author.";
  }
  if (!content) {
    throw "Comment needs content";
  }
  if (!id) {
    throw "Error: No post id";
  }
  const postRef = doc(db, "comments", id);
  const datePosted = new Date();

  // Atomically add a new comment to the "comments" array field.
  await updateDoc(postRef, {
    comments: arrayUnion({
      author,
      content,
      datePosted,
    }),
  });
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
