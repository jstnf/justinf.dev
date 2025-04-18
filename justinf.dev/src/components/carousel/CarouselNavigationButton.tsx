import { CSSProperties } from "react";

import { leftArrow } from "@/components/icons/LeftArrow";
import { rightArrow } from "@/components/icons/RightArrow";

const rightStyle: CSSProperties = {
  right: "1rem",
};

const leftStyle: CSSProperties = {
  left: "1rem",
};

function CarouselNavigationButton(props: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 ${
        props.direction === "left" ? "left-4" : "right-4"
      } z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 opacity-90 hover:bg-gray-700`}
      onClick={props.onClick}
      style={props.direction === "left" ? leftStyle : rightStyle}
    >
      {props.direction === "left" && leftArrow}
      {props.direction === "right" && rightArrow}
    </button>
  );
}

export default CarouselNavigationButton;
