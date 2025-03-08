"use client";

import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  icon?: React.ReactNode;
  question?: string;
  answer?: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  question = "Is my data secure and private?",
  answer = "Discover amazing content", 
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-white/30 backdrop-blur-lg px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2" +
        (className || "")
      }
    >

      {/* <div className="flex flex-col items-start gap-y-1"> */}
      <div className="flex items-center gap-x-2">
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={"text-lg font-medium "+ titleClassName}>{question}</p>
      </div> 
      <div className="flex-1 flex items-center justify-center">
        <p className="whitespace-normal text-lg">{answer}</p>
      </div>
     </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}


// export function AnimatedTitle({ title }: { title: string }) {
//   return (
//     <h2 className="pop-up-title">
//       {title.split('').map((char, index) => (
//         <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
//           {char}
//         </span>
//       ))}
//     </h2>
//   );
// }



export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-6 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">

      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}