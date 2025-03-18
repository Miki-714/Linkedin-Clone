import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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

export const GoogleSignInAPI = (email, password) => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};
