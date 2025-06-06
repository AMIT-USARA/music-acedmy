'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="HOME">
            HELLO AMIT USARA!
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="OUR COURSES">
          <div className="flex flex-col space-y-8 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic music theory</HoveredLink>
            <HoveredLink href="/courses">Advance Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>


            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contect"}>
          <MenuItem setActive={setActive} active={active} item="CONTECT US">

          </MenuItem>
        </Link>
      </Menu>

    </div>
  );
} 