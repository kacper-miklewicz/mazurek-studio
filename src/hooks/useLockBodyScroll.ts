import { useCallback } from "react";

const useLockBodyScroll = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return { lockScroll, unlockScroll };
};

export default useLockBodyScroll;
