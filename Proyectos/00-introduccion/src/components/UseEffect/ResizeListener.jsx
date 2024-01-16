import { useEffect, useState } from "react";

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const ResizeListener = () => {
  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    function handlerResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-cyan-200 h-screen">
      <p>
        El tamaño de mi ventana es: {windowSize.width}x{windowSize.height}
      </p>
    </div>
  );
};

export default ResizeListener;
