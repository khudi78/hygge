import React, { useState } from "react";
import logo from "./photos/Rectangle.png";
import { FaChevronDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { RiFullscreenLine } from "react-icons/ri";

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
  return (
    <div>
      {/* navbar */}

      <div>
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            Hygge<span>X</span>
          </div>
        </div>
        <div>
          <div>
            <ul>
              <li>Home</li>
              <li>Flashcard</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <button>Login</button>
          </div>
        </div>
      </div>

      {/* 1st div */}

      <div>
        <div>
          <GoHome />
        </div>
        <div>
          <FaChevronRight />
        </div>
        <div>Flashcard</div>
        <div>
          <FaChevronRight />
        </div>
        <div>Mathematics</div>
        <div>
          <FaChevronRight />
        </div>
        <div>Relation and Function</div>
      </div>

      {/* 2nd div */}

      <div>
        <div>Relations and Functions ( Mathematics )</div>
        <div>
          <ul>
            <li>Study</li>
            <li>Quiz</li>
            <li>Test</li>
            <li>Game</li>
            <li>Others</li>
          </ul>
        </div>
        <div>
          <div>9 + 6 + 7x - 2x -3</div>
        </div>
        <div className="flex">
          <div>
            <FaArrowRotateRight />
          </div>
          <div className="flex">
            <div>
              <FaCircleChevronLeft />
            </div>
            <div>01/10</div>
            <div>
              <FaCircleChevronRight />
            </div>
          </div>
          <div>
            <RiFullscreenLine />
          </div>
        </div>
      </div>

      {/* 3rd div */}

      <div></div>

      {/* 4th div */}

      <div>
        <div className="text-black mb-24">
          <h1 className="text-4xl mb-8 font-semibold">FAQ</h1>
          <div className="flex flex-col gap-y-5">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleMultiSelection(item.id)}
                className="flex flex-col cursor-pointer  border text-slate-600 border-neutral-300  rounded-lg pl-8 p-4 text-lg"
              >
                <div className="flex flex-row justify-between">
                  {item.title}
                  <FaChevronDown className="mt-2 mr-5" />
                </div>

                {multiple.indexOf(item.id) !== -1 && (
                  <div
                    className=" text-slate-500 mt-6 text-base ml-10 pr-10"
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
