"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { HeaderNavLinks } from "@/data/layout-data";
import { useModals } from "@/providers/modals-provider";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

import { ArrowRight } from "lucide-react";

interface Props {
  isOpen: boolean;
  closeMenu: () => void;
}

function MobileNavMenu({ isOpen, closeMenu }: Props) {
  const pathname = usePathname();
  const { openConversationModal } = useModals();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20"
          />

          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 26,
            }}
            className="fixed inset-x-0 top-[90px] z-40 w-[90%] mx-auto rounded-3xl px-6 pb-8 pt-6
            backdrop-blur-2xl bg-white/20 border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.25)] overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-32 -left-32 w-[260px] h-[260px] rounded-full blur-[120px] opacity-40 animate-[pulse_12s_ease-in-out_infinite]"
                style={{
                  background:
                    "radial-gradient(circle,#4f46e5 0%, transparent 70%)",
                }}
              />

              <div
                className="absolute -bottom-32 -right-32 w-[260px] h-[260px] rounded-full blur-[120px] opacity-30 animate-[pulse_14s_ease-in-out_infinite]"
                style={{
                  background:
                    "radial-gradient(circle,#3730a3 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.07 },
                  },
                }}
                className="flex flex-col gap-5"
              >
                {HeaderNavLinks.map((data, index) => {
                  const active = pathname === data.path;

                  return (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        onClick={closeMenu}
                        href={data.path}
                        className={cn(
                          "flex items-center gap-2 text-base transition-colors duration-300",
                          active
                            ? "text-primary font-semibold"
                            : "text-dark-sub-heading hover:text-primary",
                        )}
                      >
                        <ArrowRight size={18} />
                        {data.title}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <Separator className="w-full h-[2px] rounded-xl bg-white/30 mt-6 mb-5" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  onClick={() => {
                    closeMenu();
                    openConversationModal();
                  }}
                  className="relative overflow-hidden rounded-full border-2 w-full py-2 border-primary bg-primary-hover text-primary-foreground"
                >
                  Start a Conversation
                  <span className="btn-shine absolute inset-0" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileNavMenu;
