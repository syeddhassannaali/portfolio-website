"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-72 -left-72 w-[700px] h-[700px] blur-[220px] opacity-30"
          style={{
            background:
              "radial-gradient(circle,#5b5cf6 0%, rgba(91,92,246,0.35) 35%, transparent 70%)",
          }}
        />

        <div
          className="absolute -bottom-72 -right-72 w-[700px] h-[700px] blur-[220px] opacity-30"
          style={{
            background:
              "radial-gradient(circle,#3730a3 0%, rgba(55,48,163,0.35) 35%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative layout-standard pt-16 pb-8">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-y-16 gap-x-12">
          <div className="lg:col-span-5 md:col-span-2 flex flex-col">
            <h2 className="md:text-3xl text-2xl font-light tracking-tight text-dark-heading">
              Syed Hassan Ali
            </h2>

            <span className="md:text-lg text-base mt-1 text-dark-sub-heading font-light">
              Systems Architect & Automation Engineer
            </span>

            <p className="md:text-base text-sm text-dark-foreground max-w-md leading-relaxed mt-4">
              Designing scalable software infrastructure, automation platforms,
              and high-performance digital systems for founders building serious
              businesses.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[
                {
                  icon: <FaGithub />,
                  url: process.env.NEXT_PUBLIC_GITHUB,
                },
                {
                  icon: <FaTwitter />,
                  url: process.env.NEXT_PUBLIC_TWITTER,
                },
                {
                  icon: <FaLinkedin />,
                  url: process.env.NEXT_PUBLIC_LINKEDIN,
                },
                {
                  icon: <SiUpwork />,
                  url: process.env.NEXT_PUBLIC_UPWORK,
                },
                {
                  icon: <SiFiverr />,
                  url: process.env.NEXT_PUBLIC_FIVERR,
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  whileHover={{ y: -3 }}
                  className="footer-social"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h4 className="md:text-xl text-lg tracking-[0.12em] uppercase text-dark-heading">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/"
                className="md:text-base text-sm text-dark-foreground hover:text-primary lg:hover:translate-x-1 animation-standard lg:w-fit"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="md:text-base text-sm text-dark-foreground hover:text-primary lg:hover:translate-x-1 animation-standard lg:w-fit"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="md:text-base text-sm text-dark-foreground hover:text-primary lg:hover:translate-x-1 animation-standard lg:w-fit"
              >
                Case Studies
              </Link>
              <Link
                href="/engagement"
                className="md:text-base text-sm text-dark-foreground hover:text-primary lg:hover:translate-x-1 animation-standard lg:w-fit"
              >
                Engagement
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h4 className="md:text-xl text-lg tracking-[0.12em] uppercase text-dark-heading">
              Start a Conversation
            </h4>

            <p className="md:text-base text-sm text-dark-foreground max-w-sm leading-relaxed mt-4">
              Planning a new system, product, or automation platform? Reach out
              and let&apos;s explore how it can be built properly.
            </p>

            <Button className="relative overflow-hidden rounded-full bg-primary-hover md:text-base font-normal h-[45px] text-primary-foreground hover:bg-primary mt-6">
              Schedule a Consultation
              <span className="btn-shine absolute inset-0" />
            </Button>

            <div className="flex items-center gap-3 mt-8">
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:contact@yourdomain.com"
                className="footer-social"
              >
                <IoMail />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="footer-social"
              >
                <FaTelegram />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="footer-social"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 font-light text-sm text-dark-heading">
            <Link
              href="/privacy"
              className="hover:underline underline-offset-4 animation-standard hover:text-dark-sub-heading"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:underline underline-offset-4 animation-standard hover:text-dark-sub-heading"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-sm text-dark-heading">
            Designed & Developed by Syed Hassan Ali
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
