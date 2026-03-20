"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useModals } from "@/providers/modals-provider";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import CalenderLogo from "../../../public/logos/calender-logo.png";
import MailLogo from "../../../public/logos/mail-logo.png";
import WhatsAppLogo from "../../../public/logos/whatsapp-logo.png";
import TelegramLogo from "../../../public/logos/telegram-logo.png";

function ConversationModal() {
  const { isConversationModalOpen, closeConversationModal } = useModals();

  return (
    <Dialog
      open={isConversationModalOpen}
      onOpenChange={(open) => !open && closeConversationModal()}
    >
      <DialogContent className="md:max-w-[480px] max-w-[90%] border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] !rounded-2xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 h-[280px] w-[280px] rounded-full blur-[120px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            }}
          />

          <div
            className="absolute -bottom-32 -right-32 h-[280px] w-[280px] rounded-full blur-[120px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, #3730a3 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <DialogHeader className="text-center flex-center flex-col gap-0">
            <DialogTitle className="md:text-2xl text-xl text-dark-heading uppercase font-medium">
              Start a Conversation
            </DialogTitle>
            <DialogDescription className="text-dark-sub-heading font-light text-sm max-md:max-w-[300px]">
              Choose the communication channel that works best for you
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/30 px-4 py-4 transition-all"
            >
              <Image src={CalenderLogo} alt="calendar" width={28} height={28} />
              <span className="md:text-base text-sm text-dark-foreground">
                Schedule Consultation
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/[0.03]
              hover:bg-white/[0.06] px-4 py-4 transition-all"
            >
              <Image src={MailLogo} alt="mail" width={26} height={26} />
              <span className="md:text-base text-sm text-dark-foreground">
                Send an Email
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/[0.03]
              hover:bg-white/[0.06] px-4 py-4 transition-all"
            >
              <Image src={WhatsAppLogo} alt="whatsapp" width={26} height={26} />
              <span className="md:text-base text-sm text-dark-foreground">
                Chat on WhatsApp
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/[0.03]
              hover:bg-white/[0.06] px-4 py-4 transition-all"
            >
              <Image src={TelegramLogo} alt="telegram" width={26} height={26} />
              <span className="md:text-base text-sm text-dark-foreground">
                Message on Telegram
              </span>
            </motion.button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConversationModal;
