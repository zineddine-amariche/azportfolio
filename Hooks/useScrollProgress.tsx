import React, { useState, useEffect } from "react";

function useScrollProgress() {
  const [completion, setcompletion] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Number((winScroll / height).toFixed(2)) * 100;
      setcompletion(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return completion;
}

export default useScrollProgress;
