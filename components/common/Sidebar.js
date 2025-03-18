"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <aside className="lg:pr-6 border-r border-gray-200 lg:w-[20%] pt-14 flex flex-col min-h-screen">
      <nav>
        <ul className="flex flex-col gap-3.5 font-bold text-xl">
          <li
            className={`py-6 px-4 lg:px-7 ${
              isActive("/")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-xl lg:rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/" className="flex items-center gap-6">
              <Icon icon="ri:bar-chart-fill" className="text-2xl" />
              <span className="max-lg:hidden">Dashboard</span>
            </Link>
          </li>
          <li
            className={`py-6 px-4 lg:px-7 ${
              isActive("/skilltest")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-xl lg:rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/skilltest" className="flex items-center gap-6">
              <Icon icon="mdi:award" className="text-2xl" />
              <span className="max-lg:hidden">Skill Test</span>
            </Link>
          </li>
          <li
            className={`py-6 px-4 lg:px-7 ${
              isActive("/internship")
                ? "text-tertiary bg-[#F4F6F8] rounded-r-xl lg:rounded-r-4xl"
                : "text-secondary"
            }`}
          >
            <Link href="/internship" className="flex items-center gap-6">
              <Icon icon="grommet-icons:document" className="text-2xl" />
              <span className="max-lg:hidden">Internship</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
