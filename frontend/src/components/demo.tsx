"use client";

import DisplayCards from "../components/display-cards";
import { Sparkles } from "lucide-react";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-500" />,
    question: "Is my data secure and private?",
    answer: "Yes, Vyakarana priorotize user privacy and data security.",
    titleClassName: "text-blue-700",
    className:
      "[grid-area:stack] translate-x-[-120px] translate-y-90 hover:-translate-y-[-290px] before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    question: "Do I need to create an account to use this?",
    answer: "No, you can use Vyakarana without creating an account.",
    titleClassName: "text-blue-700",
    className:
      "[grid-area:stack] translate-x-[-40px] translate-y-65 hover:-translate-y-[-180px] before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    question: "Is Vyakarana free to use?",
    answer: "Yes, Vyakarana is free.",
    titleClassName: "text-blue-700",
    className:
      "[grid-area:stack] translate-x-10 translate-y-40 hover:-translate-y-[-80px] before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    question: "How does it work?",
    answer: "It analyzes your text for grammar errors and suggests corrections.",
    titleClassName: "text-blue-700",
    className:
      "[grid-area:stack] translate-x-30 translate-y-13 hover:-translate-y-6 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    question: "What is Vyakarana?",
    answer: "Sinhala grammar checking tool.",
    titleClassName: "text-blue-700",
    className:
      "[grid-area:stack] translate-x-50 translate-y-[-50px] hover:translate-y-[-70px]",
  },
];






function DisplayCardsDemo() {




  return (
    <div className="flex w-full justify-center bg-blue-100 ">
      <div className="w-full max-w-3xl">
      <div className="flex flex-col  justify-start items-center">

      {/* Animated Title */}
      <h2>"Got Questions? We’ve Got Answers!" </h2>
      


      <div className="-mt-60">
        <DisplayCards cards={defaultCards} />
      </div>
      </div>
      </div>
    </div>
  );
}

export { DisplayCardsDemo };
