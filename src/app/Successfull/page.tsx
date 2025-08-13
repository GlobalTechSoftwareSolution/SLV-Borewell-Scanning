'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function SuccessfulBusinessSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ Typed video ref
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Video / Media */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md"
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="/video/video1.mp4"
              playsInline
              loop
              muted
            />
            <button
              onClick={handleToggle}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/10 transition hover:scale-105"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-9 w-9 text-orange-500"
              >
                {isPlaying ? (
                  <path d="M6.75 4.5h2.5v15h-2.5zm8 0h2.5v15h-2.5z" />
                ) : (
                  <path d="M8 5v14l11-7-11-7z" />
                )}
              </svg>
            </button>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              <span className="text-orange-500">2 Years</span>{" "}
              <span className="text-slate-900">Of Successful Business</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Kannan Borewells was founded by Mr. N.K.Kumar in the year 1971 pillarred
              by his son Mr. N.K. Hari Kumar in Bangalore, Karnataka, India. Today
              KANNAN BOREWELLS has emerged as Bangalore's No. 1 company in water well
              drilling rigs not only in the state of Karnataka, till date the company
              must have drilled more than 25,000 points successfully in many parts of
              India and overseas. We are fast, efficient and we have a high regard
              for safety.
            </p>

            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
              >
                <Link href='/contact'>READ MORE</Link>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SuccessfulBusinessSection;
