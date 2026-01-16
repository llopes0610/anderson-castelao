"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HERO, SITE, CONTACT } from "@/lib/constants";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[78vh] sm:h-[82vh] lg:h-[88vh]
      "
    >
      {/* BACKGROUND SLIDE */}
      <Image
        key={HERO.images[index]}
        src={HERO.images[index]}
        alt="Resultados Anderson Castelão"
        fill
        priority
        className="
          object-cover
          object-[center_top]
          sm:object-center
          transition-opacity duration-1000 ease-in-out
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className="
            max-w-7xl mx-auto px-5 sm:px-8
            grid grid-cols-1 lg:grid-cols-2
            gap-10 lg:gap-16
            items-center
          "
        >
          {/* TEXT */}
          <div>
            {/* LOGO */}
            <div className="mb-6">
              <Image
                src={HERO.logo}
                alt={`${SITE.name} Logo`}
                width={96}
                height={96}
                priority
                className="opacity-90"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              {SITE.name}
            </h1>

            <p className="text-gold text-lg sm:text-xl mt-2 mb-5 tracking-wide">
              {SITE.slogan}
            </p>

            <p className="text-zinc-300 max-w-xl mb-8 leading-relaxed text-sm sm:text-base">
              {SITE.description}
            </p>

            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                bg-gold text-black
                px-8 py-4
                rounded-full font-semibold
                hover:scale-105
                hover:shadow-[0_0_22px_rgba(230,199,90,0.3)]
                transition-all
              "
            >
              Falar no WhatsApp <ArrowRight size={18} />
            </a>
          </div>

          {/* ANDERSON IMAGE */}
          <div className="hidden lg:flex justify-center relative">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl scale-75" />

            <Image
              src={HERO.profileImage}
              alt={SITE.name}
              width={420}
              height={520}
              priority
              className="
                relative
                rounded-[32px]
                object-cover
                opacity-95
                mix-blend-lighten
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO.images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "bg-gold scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
