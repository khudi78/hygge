import React, { useState } from "react";
import logo from "./photos/Rectangle.png";
import { IoIosArrowDown } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { RiFullscreenLine } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import './Flashcard.css';

const data = [
  {
    id: "1",
    title: "Can education flashcards be used for all age groups?",
    description:
      "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
  },
  {
    id: "2",
    title: "How do education flashcards work?",
    description:
      "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
  },
  {
    id: "3",
    title: "Can education flashcards be used for test preparation?",
    description:
      "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
  },
];

function Flashcard() {
  const [multiple, setMultiple] = useState([]);
  const [clicked, setClicked] = useState(1);
  const [menu,setMenu] =useState(false)

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  const handleOnClick = (number) => {
    setClicked(number); // Toggle clicked state
  };

  const onMenuSelect=()=>{
     setMenu(!menu)
  }

  return (
    <div className="container mx-auto w-[450px] ml-[-30px] lg:ml-[30px] lg:w-[1300px]">
      {/* Navbar */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-14" />
          <div className="text-[#06286E] text-3xl ml-2">
            Hygge<span className="font-bold">X</span>
          </div>
        </div>
        <IoMenuOutline className="lg:hidden" onClick={()=>onMenuSelect()}/>

        <div className={`lg:flex lg:gap-9 ${menu ? "flex flex-col gap-2 text-center absolute  shadow-xl w-[160px] h-[180px] ml-[280px] mt-[190px] bg-white ":"hidden"}`}>
            <div >
            
            <ul className={`lg:flex gap-9 lg:text-xl  ${menu ? "text-lg":"hidden"} `} >
            
          <li className="hover:lg:text-2xl hover:font-semibold cursor-pointer">Home</li>
          <li className="hover:lg:text-2xl hover:font-semibold cursor-pointer">Flashcard</li>
          <li className="hover:lg:text-2xl hover:font-semibold cursor-pointer">Contact</li>
          <li className="hover:lg:text-2xl hover:font-semibold cursor-pointer">FAQ</li>
             </ul>
            </div>
            <div className={`border-2 text-white w-20 h-9 lg:pl-4 pt-[2px]  bg-gradient-to-b from-[#06286E] to-[#164EC0] lg:block rounded-3xl ${menu ? "ml-[40px] pl-[-2px]":"hidden"}`}>
          <button>Login</button>
        </div>
        </div>
        
        
      </div>

      {/* First section */}
      <div className="flex mt-10 gap-1 text-[#696671]">
        <GoHome className=" text-3xl" />
        <FaChevronRight className="mt-[6px] text-sm text-blue-900" />
        <div>Flashcard</div>
        <FaChevronRight className="mt-[6px] text-sm text-blue-900" />
        <div>Mathematics</div>
        <FaChevronRight className="mt-[6px] text-sm text-blue-900" />
        <div className="text-blue-900 font-semibold">Relation and Function</div>
      </div>

      {/* Second section */}
      <div className="mt-10">
        <div className=" text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">
          Relations and Functions (Mathematics)
        </div>
        <div className="mt-7 mb-6 w-full lg:w-[600px] mx-auto lg:px-28 px-14 text-lg">
          <ul className="flex gap-7 text-lg font-semibold">
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                key={item}
                className={`${
                  clicked === item ? "text-[#06286E]" : "text-[#696671]"
                }`}
                onClick={() => handleOnClick(item)}
              >
                {item === 1 && "Study"}
                {item === 2 && "Quiz"}
                {item === 3 && "Test"}
                {item === 4 && "Game"}
                {item === 5 && "Others"}
                <div
                  className={`w-[60px] ml-[-6px] h-[2px] rounded-lg ${
                    clicked === item ? "bg-[#06286E]" : "bg-white"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 w-full lg:w-[600px] h-[350px] rounded-3xl mx-auto bg-gradient-to-bl from-[#051A91] to-[#061C93] to-[#2284F1] to-[#1F80EB] text-white">
          <div className="text-center text-2xl">
            <div className="flex gap-[350px] lg:gap-[490px] mt-7 ml-5 mb-24">
              <div><MdLightbulbOutline /></div>
              <div><IoMdVolumeHigh /></div>
            </div>
            <div>9 + 6 + 7x - 2x - 3</div>
          </div>
        </div>
        <div className="flex mt-7 mb-6 w-full lg:w-[600px] lg:px-14  px-12 mx-auto lg:gap-[130px] gap-[60px] text-lg">
          <div className="text-[28px] mt-[3px] inline-block ">
            <FaArrowRotateRight className="text-[#06286E]" style={{background: 'linear-gradient(to bottom right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}/>
          </div>
          <div className="flex gap-7 text-[32px] ">
            <FaCircleChevronLeft className="text-[#06286E]"/>
            <div className="text-[24px] ">01/10</div>
            <FaCircleChevronRight className="text-[#06286E]"/>
          </div>
          <div className="text-[28px] mt-[3px]">
            <RiFullscreenLine className="text-[#06286E]"/>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="flex justify-between items-center mb-20 mt-16">
        <div className="flex gap-5 ">
          <div className="lg:w-20 lg:h-20 w-14 h-14 rounded-full shadow-2xl shadow-[#06286E]">
            <img src={logo} alt="" className="lg:w-10 lg:h-10 lg:mt-5 lg:ml-5 w-9 ml-[8px] mt-[14px]" />
          </div>
          <div className="flex flex-col mt-[12px]">
            <div className="text-xs font-semibold text-slate-500">Published by</div>
            <div className="text-[#06286E] text-3xl">
              Hygge<span className="font-bold">X</span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <FaPlusCircle className="text-4xl text-[#06286E]" />
          </div>
          <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] font-semibold">
            Create Flashcard
          </div>
        </div>
      </div>

      {/* Fourth section */}
      <div className="text-black mb-24">
        <h1 className="text-4xl mb-8 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">FAQ</h1>
        <div className="flex flex-col gap-y-5">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleMultiSelection(item.id)}
              className="flex flex-col cursor-pointer w-full lg:w-[850px] border text-[#28262C] pl-8 px-4 py-3 text-lg border-gradient-gray rounded-lg"
            >
              <div className="flex justify-between items-center">
                {item.title}
                <IoIosArrowDown className="mt-2 mr-5" />
              </div>
              {multiple.indexOf(item.id) !== -1 && (
                <div
                  className="text-slate-700 mt-3 text-base pr-10"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
