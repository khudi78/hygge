import React, { useState} from "react";
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
      "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the crads repeatedly, reinforcing their memory nad enhancing learning through repeatition.",
  },
  {
    id: "3",
    title: "Can education flashcards be used for test preparation?",
    description:
      "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts,terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
  },
];
function Flashcard() {
  const [multiple, setMultiple] = useState([]);

  // const handleClick = () => {
  //   setSelect(!select);
  // };

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  const [clicked, setClicked] = useState(1);

  const handleOnClick = (number) => {
      setClicked(number); // Toggle clicked state
  };



  return (
    <div>
      {/* navbar */}

      <div className="flex gap-[730px]">
        <div className="flex">
          <div className="w-14">
            <img src={logo} alt=""  className=""/>
          </div>
          <div className="text-[#06286E] text-3xl">
            Hygge<span className="font-bold">X</span>
          </div>
        </div>
        <div  className="flex gap-9 text-xl">
          <div>
            <ul className="flex gap-9">
              <li>Home</li>
              <li>Flashcard</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="border-2 text-white w-20 pl-3 pt-[1px] bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-3xl">
            <button>Login</button>
          </div>
        </div>
      </div>

      {/* 1st div */}

      <div className="flex mt-10 gap-1 text-[#696671]">
        <div className="mt-[1px] text-[24px]">
          <GoHome />
        </div>
        <div className="mt-[6px] text-sm  text-blue-900">
          <FaChevronRight />
        </div>
        <div>Flashcard</div>
        <div className="mt-[6px] text-sm  text-blue-900">
          <FaChevronRight />
        </div>
        <div>Mathematics</div>
        <div className="mt-[6px] text-sm  text-blue-900">
          <FaChevronRight />
        </div>
        <div className=" text-blue-900 font-semibold">Relation and Function</div>
      </div>

      {/* 2nd div */}

      <div className="mt-10 ">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]" >Relations and Functions ( Mathematics )</div>
        
        <div className="mt-7 mb-6 w-[450px]  mx-auto px-14 text-lg">
          <ul className={`flex gap-7  text-lg font-semibold `}>
            <li className={`${clicked===1 ? 'text-[#06286E]' : 'text-[#696671]'}`} onClick={() => handleOnClick(1)}>Study <div className={`w-[60px] ml-[-6px] h-[2px] rounded-lg  ${clicked===1 ? 'bg-[#06286E]' : 'bg-white'}`}></div></li>
            <li className={`${clicked===2 ? 'text-[#06286E]' : 'text-[#696671]'}`} onClick={() => handleOnClick(2)}>Quiz <div className={`w-[60px] ml-[-6px] h-[2px] rounded-lg  ${clicked===2 ? 'bg-[#06286E]' : 'bg-white'}`}></div></li>
            <li className={`${clicked===3 ? 'text-[#06286E]' : 'text-[#696671]'}`} onClick={() => handleOnClick(3)}>Test <div className={`w-[60px] ml-[-6px] h-[2px] rounded-lg  ${clicked===3 ? 'bg-[#06286E]' : 'bg-white'}`}></div></li>
            <li className={`${clicked===4 ? 'text-[#06286E]' : 'text-[#696671]'}`} onClick={() => handleOnClick(4)}>Game <div className={`w-[60px] ml-[-6px] h-[2px] rounded-lg  ${clicked===4 ? 'bg-[#06286E]' : 'bg-white'}`}></div></li>
            <li className={`${clicked===5 ? 'text-[#06286E]' : 'text-[#696671]'}`} onClick={() => handleOnClick(5)}>Others <div className={`w-[60px] ml-[-6px] h-[2px] rounded-lg  ${clicked===5 ? 'bg-[#06286E]' : 'bg-white'}`}></div></li>
          </ul>
        </div>
        
        <div className="border-2 w-[600px] h-[350px] rounded-3xl mx-auto bg-gradient-to-bl from-[#051A91] to-[#061C93] to-[#2284F1] to-[#1F80EB]  text-white">
          <div className=" text-center text-2xl">
            <div className="flex gap-[490px] mt-7 ml-5 mb-24">
              <div><MdLightbulbOutline /></div>
              <div><IoMdVolumeHigh /></div>
            </div>
           <div> 9 + 6 + 7x - 2x - 3</div> 
          </div>
        </div>
        <div className="flex mt-7 mb-6 w-[390px] mx-auto gap-[75px] text-lg ">
          <div className="text-[28px] mt-[3px] inline-block ">
            <FaArrowRotateRight style={{background: 'linear-gradient(to bottom right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}/>
          </div>
         
          <div className="flex gap-7 text-[32px] ">
            <div className="">
              <FaCircleChevronLeft />
            </div>
            <div className="text-[24px] ">01/10</div>
            <div>
              <FaCircleChevronRight />
            </div>
          </div>
          <div className="text-[28px] mt-[3px]">
            <RiFullscreenLine />
          </div>
        </div>
        
      </div>

      {/* 3rd div */}

      <div className="flex gap-[900px] mb-20 mt-16">
        <div className="flex gap-5">
        <div className="w-20 h-20 rounded-full shadow-2xl shadow-[#06286E]">
            <img src={logo} alt=""  className="w-10 h-10 mt-5 ml-5 "/>
          </div>
          <div className="flex flex-col">
            <div className=" text-xs font-semibold text-slate-500">Published by</div>
            <div className="text-[#06286E] text-3xl">
            Hygge<span className="font-bold">X</span>
          </div>
          </div>
         
        </div>
        <div className="flex gap-5">
            <div><FaPlusCircle className="text-4xl text-[#06286E]"/></div>
            <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] font-semibold">Create Flashcard</div>
        </div>
      </div>

      {/* 4th div */}

      <div>
        <div className="text-black mb-24">
          <h1 className="text-4xl mb-8 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">FAQ</h1>
          <div className="flex flex-col gap-y-5">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleMultiSelection(item.id)}
                className="flex flex-col cursor-pointer w-[850px] border text-[#28262C] pl-8 px-4 py-3 text-lg border-gradient-gray rounded-lg"  
              >
                <div className="flex flex-row justify-between">
                  {item.title}
                  <IoIosArrowDown className="mt-2 mr-5" />
                </div>

                {multiple.indexOf(item.id) !== -1 && (
                  <div
                    className="  text-slate-700 mt-3 text-base  pr-10"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


   

    </div>
  );
}

export default Flashcard;
