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
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[72vh] sm:h-[78vh] lg:h-[86vh]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        key={HERO.images[index]}
        src={HERO.images[index]}
        alt="Resultados de alunos Anderson Castelão"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="
          object-cover
          object-center
          transition-opacity duration-1000 ease-in-out
        "
      />

      {/* OVERLAY (mais leve no mobile) */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/55 via-black/45 to-black/75
        sm:from-black/65 sm:via-black/55 sm:to-black/80
      " />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
          
          {/* LOGO */}
          <div className="mb-4 sm:mb-6">
            <Image
              src={HERO.logo}
              alt={`${SITE.name} Logo`}
              width={80}
              height={80}
              priority
              quality={100}
              className="opacity-95"
            />
          </div>

          {/* TEXT */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight max-w-3xl">
            {SITE.name}
          </h1>

          <p className="text-gold text-lg sm:text-xl mt-2 mb-4 tracking-wide">
            {SITE.slogan}
          </p>

          <p className="text-zinc-200 max-w-xl mb-6 leading-relaxed text-sm sm:text-base">
            {SITE.description}
          </p>

          {/* CTA */}
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-gold text-black
              px-7 py-4
              rounded-full font-semibold
              hover:scale-105
              hover:shadow-[0_0_22px_rgba(230,199,90,0.3)]
              transition-all
            "
          >
            Falar no WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
