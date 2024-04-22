import React, { DragEvent, useState } from "react";

export default function DropFile({
  children,
  className,
  handleDropFile,
}: {
  children: React.ReactNode;
  className: string;
  handleDropFile: (file: File) => void;
}) {
  const [isOver, setIsOver] = useState(false);
  function handleDragOver(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsOver(true);
  }

  function handleDragLeave(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsOver(false);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files);
    handleDropFile(droppedFiles[0]);
  }

  return (
    <label
      className={`${className} ${
        isOver ? "bg-LightPurple" : " bg-VeryLightPurple"
      } cursor-pointer`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </label>
  );
}
