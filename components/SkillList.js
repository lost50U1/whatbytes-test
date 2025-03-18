"use client";

import { htmlLogo } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./ui/Modal";
import { Icon } from "@iconify/react";

export default function SkillList() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center gap-4">
        <Image src={htmlLogo} alt="html logo" width={53} height={76} />
        <div>
          <h3 className="text-primary font-bold text-lg">
            Hyper Text Markup Language
          </h3>
          <p className="font-semibold">
            Question: 08 | Duration: 15 min | Submitted on 5 Feb 2025
          </p>
        </div>
        <button onClick={handleOpenModal} className="blue-button">
          Update
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="flex flex-col gap-4 mt-4 lg:mt-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your <span className="font-bold">Rank</span>
                  </h4>
                </div>
              </div>
              <input
                type="text"
                className="border border-tertiary rounded-lg p-2 w-full sm:w-auto"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your <span className="font-bold">Percentile</span>
                  </h4>
                </div>
              </div>
              <input
                type="text"
                className="border border-tertiary rounded-lg p-2 w-full sm:w-auto"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
              <div className="flex items-center gap-4">
                <div className="bg-darkblue rounded-full w-8 h-8 text-white font-bold text-2xl flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-primary font-medium text-lg">
                    Update Your{" "}
                    <span className="font-bold">Current Score(out of 15)</span>
                  </h4>
                </div>
              </div>
              <input
                type="text"
                className="border border-tertiary rounded-lg p-2 w-full sm:w-auto"
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-8">
            <button
              onClick={handleCloseModal}
              className="text-[#132278] font-semibold text-sm px-6 py-3 rounded-md border-2 border-[#132278] hover:bg-[#132278] hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
            <button className="blue-button flex items-center gap-2">
              Save <Icon icon="grommet-icons:link-next" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
