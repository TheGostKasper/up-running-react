import  { useCallback, useRef } from "react";

const UseScrollLoader = ({ hasNext, onNextPageChange }: any) => {
  const observer = useRef<any>();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNext) {
          onNextPageChange();
        }
      });
      if (node) observer.current.observe(node);
    },
    [onNextPageChange, hasNext]
  );

  return lastBookElementRef
};

export default UseScrollLoader;
