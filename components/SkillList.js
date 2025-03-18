import { htmlLogo } from "@/utils";
import Image from "next/image";
import React from "react";

export default function SkillList() {
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
        <button className="bg-[#132278] text-white font-semibold text-sm px-6 py-3 rounded-md border-2 border-primary hover:bg-[#132278]/80 transition-all duration-300">
          Update
        </button>
      </div>
    </div>
  );
}
