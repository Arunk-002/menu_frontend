import { useContext, useState } from "react";
// import { GlobalContext } from "./GlobalStateProvider";

type props = {
  id: string;
  content: string;
  index: number;
  setCurrentIndex:React.Dispatch<React.SetStateAction<number>>;
  currentIndex:number;
  menuItemsFetch: (id: string) => void;
};

const MenuBtn = ({ content, menuItemsFetch,currentIndex,setCurrentIndex, id, index }: props) => {
 

  return (
    <button
      onClick={() => {
        menuItemsFetch(id)
        setCurrentIndex(index);
      }}
      className={` border w-[80px] md:w-[120px]   border-blue-400  rounded-sm text-sm md:text-lg font-md py-3 px-5  text-white ${
        currentIndex===index ? "bg-[#0796EF]" : "bg-black"
      }`}
    >
      {content}
    </button>
  );
};

export default MenuBtn;
