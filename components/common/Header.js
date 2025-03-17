import Image from "next/image";

import { logo, profile } from "@/utils";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-10 border-b border-gray-200">
      {/* logo  */}
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={52} height={44} />
        <h1 className="text-3xl font-bold">WhatBytes</h1>
      </div>
      {/* profile  */}
      <div>
        <Image src={profile} alt="profile" width={40} height={40} />
      </div>
    </header>
  );
}
