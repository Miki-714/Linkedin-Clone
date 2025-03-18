import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
  let object = {
    status: status,
  };
  addDoc(dbRef, object)
    .then((res) => {
      toast.success("Document has been added successfully");
    })
    .catch((err) => {
      toast(err);
    });
};
