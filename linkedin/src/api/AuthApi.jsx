import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
export const LoginAPI = (email, password) => {
  try {
    let resp = signInWithEmailAndPassword(auth, email, password);
    return resp;
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let resp = createUserWithEmailAndPassword(auth, email, password);
    return resp;
  } catch (err) {
    return err;
  }
};
