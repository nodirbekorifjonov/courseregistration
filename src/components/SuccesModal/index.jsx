import React from "react";

import { useWindowSize } from "@reactuses/core";
import Confetti from "react-confetti";

// styles
import "./style.css";

const SuccesModal = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="absolute bg-[#ffffff] w-full h-full top-0 left-0 flex justify-center items-center">
      <Confetti width={width} height={height} />
      <div className="p-[2rem]">
        <h2 className="text-[2.6rem] text-center">
          Siz muvaffaqiyatli ro'yhatdan o'tdingiz🎉
        </h2>
      </div>
    </div>
  );
};

export default SuccesModal;
