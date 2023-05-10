"use client";

import React, { ReactNode, useState } from "react";
import styles from "./styles.module.css";

const ArrowUp = ({ rotate }: { rotate?: string }) => {
  return (
    <svg
      data-testid="chevron-up"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      style={{
        rotate: rotate,
        display: "inline-block",
        width: "0.8em",
        height: "0.8em",
        fontSize: "24px",
        color: "inherit",
        fill: "currentcolor",
      }}
    >
      <path d="m70 384-27-32 215-224 211 224-27 32-184-196z"></path>
    </svg>
  );
};

const Accordion = ({
  title,
  content,
  svg,
}: {
  title: string;
  content: string;
  svg: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded  mb-4">
      <button
        className="flex items-center justify-between w-full py-2 px-4 border-t "
        onClick={toggleAccordion}
      >
        <div className={styles.row}>
          {svg}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <span className="ml-2">
          {isOpen ? <ArrowUp /> : <ArrowUp rotate="180deg" />}
        </span>
      </button>
      {isOpen && (
        <div className="p-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
