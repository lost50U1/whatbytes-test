import Image from "next/image";
import { logo, profile } from "@/utils";
export default function Header() {
  return (
    <header className="header">
      {/* logo  */}
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={52} height={44} />
        <h1>WhatBytes</h1>
      </div>
      {/* profile  */}
      <div className="flex items-center gap-2 border-2 border-[#E4EBF1] rounded-xl p-2">
        <div className="avatar">
          <Image src={profile} alt="profile" width={38} height={38} />
        </div>
        <p className="text-primary font-semibold">Biruk Moges</p>
      </div>
    </header>
  );
}
