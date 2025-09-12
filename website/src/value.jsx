// ValuesPuzzleSection.jsx
import React from "react";
import { SiLocal } from "react-icons/si";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { LiaGopuramSolid } from "react-icons/lia";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { JigsawSculpturalFlow } from "./sculpture";

/**
 * PuzzlePiece: Mobile responsive puzzle piece component
 */
const PuzzlePiece = ({ position, value, sectionBgClass = "bg-slate-900" }) => {
  const Icon = value.icon;

  // Which notches to render (same logic as before)
  const hasTopInnie = position === "bottom-left" || position === "bottom-right";
  const hasBottomOutie = position === "top-left" || position === "top-right";
  const hasLeftInnie = position === "top-right" || position === "bottom-right";
  const hasRightOutie = position === "top-left" || position === "bottom-left";

  // Responsive notch sizes
  const notchClass = "absolute rounded-full";
  const innieClass = `${notchClass} shadow-inner bg-[#273848]`;
  const outieClass = `${notchClass} bg-[#374151] shadow-2xl`;

  return (
    <div className="relative w-full aspect-square overflow-visible">
      {/* main piece body */}
      <div
        className="absolute inset-2 sm:inset-3 bg-white rounded-sm shadow-[0_12px_24px_rgba(2,6,23,0.4)] sm:shadow-[0_18px_30px_rgba(2,6,23,0.6)] transition-transform duration-300 group hover:scale-[1.03] hover:z-30"
        style={{
          overflow: "visible",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        }}
      >
        {/* RESPONSIVE NOTCHES */}
        {/* Top innie */}
        {hasTopInnie && (
          <div
            className={`${innieClass} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -top-7 sm:-top-8 md:-top-10 left-1/2 -translate-x-1/2 z-10`}
            aria-hidden
          />
        )}

        {/* Bottom outie */}
        {hasBottomOutie && (
          <div
            className={`${outieClass} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -bottom-7 sm:-bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 z-20`}
            aria-hidden
          />
        )}

        {/* Left innie */}
        {hasLeftInnie && (
          <div
            className={`${innieClass} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -left-7 sm:-left-8 md:-left-10 top-1/2 -translate-y-1/2 z-10`}
            aria-hidden
          />
        )}

        {/* Right outie */}
        {hasRightOutie && (
          <div
            className={`${outieClass} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -right-7 sm:-right-8 md:-right-10 top-1/2 -translate-y-1/2 z-20`}
            aria-hidden
          />
        )}

        {/* Content - mobile shows only title and subtitle */}
        <div className="relative z-30 h-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
          {/* Icon - hidden on mobile, visible on sm and up */}
          <div
            className="hidden sm:flex w-12 h-12 md:w-16 md:h-16 rounded-md items-center justify-center mb-3 md:mb-4"
            style={{
              background: "#374151",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Icon className="text-white" size={window.innerWidth < 768 ? 20 : 26} />
          </div>

          {/* Title - responsive sizing */}
          <h3 className="gravesend-sans font-light text-base sm:text-xl md:text-2xl text-white leading-tight mb-1 sm:mb-2">
            {value.title}
          </h3>

          {/* Subtitle - responsive sizing */}
          <p className="text-xs sm:text-sm md:text-md font-light uppercase text-gray-400 tracking-wide mb-2">
            {value.subtitle}
          </p>

          {/* Description - hidden on mobile, visible on sm and up */}
          <p className="gellix-font hidden sm:block text-sm md:text-base text-gray-400 leading-relaxed max-h-[5rem] md:max-h-[6.5rem] overflow-hidden line-clamp-4">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      title: "Integrity in Action",
      subtitle: "consistent, ethical & transparent",
      description:
        "We act with unwavering integrity in every relationship, decision, and investment. In markets where trust is earned through consistency and transparency, we uphold the highest ethical standards.",
      icon: FaAmericanSignLanguageInterpreting,
    },
    {
      title: "Local Intelligence",
      subtitle: "community-led, globally informed",
      description:
        "We meet communities where they are and invest with a world-class lens—local insight backed by global discipline.",
      icon: SiLocal,
    },
    {
      title: "Purposeful Capital",
      subtitle: "growth with long-term value",
      description:
        "Capital must do more than generate returns— it must create durable value. We back businesses that solve real problems and uplift communities.",
      icon: LiaGopuramSolid,
    },
    {
      title: "Partnership for Progress",
      subtitle: "we invest with you",
      description:
        "We are active partners in growth—rolling up our sleeves to scale responsibly and sustainably alongside founders.",
      icon: FaPeopleCarryBox,
    },
  ];

  const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];

  return (
    <section className="relative py-16 md:py-20 bg-white/8 backdrop-blur-sm overflow-hidden"
      style={{ backgroundColor: '#273848'}}>
      <JigsawSculpturalFlow className="opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 py-2 md:px-4 bg-white/6 backdrop-blur-sm rounded-sm mb-4 md:mb-6 border border-white/10">
          <span className="gravesend-sans font-light text-white/90 text-xs sm:text-sm font-light tracking-wide">
            OUR VALUES
          </span>
        </div>

        <h2 className="gravesend-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 md:mb-4">
          Our Core{" "}
          <span className="text-transparent bg-clip-text bg-gray-400">
            Values
          </span>
        </h2>
        <p className="gellix-font text-sm md:text-md text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
          Four interlocking pieces that form our foundation
        </p>
      </div>

      {/* Responsive Puzzle grid container */}
      <div className="max-w-[500px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[960px] mx-auto grid grid-cols-2 gap-0 px-4 sm:px-0">
        {values.map((v, i) => (
          <div
            key={i}
            className={`group ${i === 1 ? "sm:-ml-px" : ""} ${
              i === 2 ? "sm:-mt-px" : ""
            } ${i === 3 ? "sm:-ml-px sm:-mt-px" : ""}`}
            style={{ overflow: "visible" }}
          >
            <PuzzlePiece
              position={positions[i]}
              value={v}
              sectionBgClass="bg-slate-900"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
