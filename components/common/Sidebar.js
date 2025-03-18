"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <aside className="pr-6 border-r border-gray-200 w-[20%] mt-14">
      <nav>
        <ul className="flex flex-col gap-3.5 font-bold">
          <li
            className={`py-6 px-7 ${
              isActive("/")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/">Dashboard</Link>
          </li>
          <li
            className={`py-6 px-7 ${
              isActive("/skilltest")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/skilltest">Skill Test</Link>
          </li>
          <li
            className={`py-6 px-7 ${
              isActive("/internship")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/internship">Internship</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
