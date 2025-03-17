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
        <Image
          src={profile}
          alt="profile"
          className="rounded-full"
          width={38}
          height={38}
        />
        <p>Biruk Moges</p>
      </div>
    </header>
  );
}
