"use client";
import { htmlLogo } from "@/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalRef.current) return;
      if (!isOpen || modalRef.current.contains(target)) return;
      onClose();
    };

    const keyHandler = ({ keyCode }) => {
      if (!isOpen || keyCode !== 27) return;
      onClose();
    };

    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[768px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Update Scores</h2>
          <Image src={htmlLogo} alt="html" width={34} height={48} />
        </div>

        {children}
      </div>
    </div>
  );
}
