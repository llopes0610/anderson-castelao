import Image from "next/image";
import { HERO, SITE } from "@/lib/constants";

export default function About() {
  return (
    <section className="py-20 sm:py-24 bg-black">
      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-12 items-center
        "
      >
        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src={HERO.profileImage}
            alt={SITE.name}
            width={380}
            height={480}
            quality={100}
            className="
              rounded-3xl
              object-cover
              opacity-95
              shadow-xl
            "
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Amor pela profissão. Obsessão por resultados.
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base">
            Anderson Castelão é movido pela excelência. Cada treino é pensado,
            cada detalhe é ajustado e cada aluno tratado como único.
            O foco é performance real, estética sustentável e disciplina.
          </p>
        </div>
      </div>
    </section>
  );
}
