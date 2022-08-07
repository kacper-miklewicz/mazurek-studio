import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { auth } from "../firebase/config";
import { useAppDispatch } from "../state/hooks";
import { setUser } from "../state/slices/authSlice";

const useLogin = () => {
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useAppDispatch();

  const login = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const userData = {
        email: user.email,
        uid: user.uid,
      };

      dispatch(setUser(userData));

      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      console.error(err);
    }
  };

  return { login, error, isPending };
};

export default useLogin;
