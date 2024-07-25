import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <header className="max-w-[75%] mx-auto flex justify-between items-center py-8 ">
      <Link href="/" className="text-2xl font-light">
        skye
      </Link>

      <div className="flex items-center gap-12">
        <nav>
          <ul className="flex items-center">
            <li>
              <Link
                href="#"
                className={`${buttonVariants({ variant: "link" })} font-normal`}
              >
                ask
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${buttonVariants({ variant: "link" })} font-normal`}
              >
                playground
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${buttonVariants({ variant: "link" })} font-normal`}
              >
                sign in
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
