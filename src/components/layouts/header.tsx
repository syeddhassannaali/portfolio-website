"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useModals } from "@/providers/modals-provider";

import { HeaderNavLinks } from "@/data/layout-data";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileNavMenu from "./mobile-nav-menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathName = usePathname();
  const { openConversationModal } = useModals();

  return (
    <>
      <header className="h-[90px] absolute z-[20] w-full overflow-hidden">
        <div className="layout-standard h-full flex items-center justify-between">
          <Link href={"/"} passHref>
            <Image
              src={Logo}
              alt="Syed Hassan Ali | Digital Systems Architect & Automation Engineer"
              className="w-auto md:h-[60px] h-[45px] hover:scale-105 animation-standard duration-500"
            />
          </Link>

          <div className="flex items-center gap-8 h-full max-lg:hidden">
            <ul className="flex items-center gap-6 text-base">
              {HeaderNavLinks.map((data, index) => {
                const isActive = pathName === data.path;

                return (
                  <li key={index} className="relative">
                    <Link
                      href={data.path}
                      className={cn(
                        "group relative pb-[6px] text-dark-heading transition-colors duration-300",
                      )}
                    >
                      {data.title}

                      <span
                        className={cn(
                          "absolute left-0 bottom-0 h-[3px] rounded-full bg-primary-hover transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover:w-full",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Button
              onClick={openConversationModal}
              className="relative overflow-hidden rounded-full border-2 border-primary bg-transparent px-5 py-2 text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:text-primary-foreground group"
            >
              Start a Conversation
              <span className="btn-shine absolute inset-0" />
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50"
          >
            {menuOpen ? (
              <X size={25} className="text-dark-heading" />
            ) : (
              <Menu size={25} className="text-dark-heading" />
            )}
          </button>
        </div>
      </header>

      <MobileNavMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
