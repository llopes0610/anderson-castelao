import { Award } from "lucide-react";

export default function Credentials() {
  const items = [
    "Bacharel em Educação Física",
    "Especialização em Hipertrofia e Estética",
    "Treinamento Funcional e Performance",
    "Avaliação Física Avançada",
    "Preparação Física de Alto Rendimento",
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Formação & Especializações
        </h2>

        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-zinc-300">
              <Award className="text-gold" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
