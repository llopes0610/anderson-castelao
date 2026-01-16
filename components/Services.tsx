import { Dumbbell, Crown, ClipboardList } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell size={32} />,
      title: "Consultoria Online",
      desc: "Acompanhamento estratégico com avaliação e ajustes constantes.",
    },
    {
      icon: <Crown size={32} />,
      title: "Mentoria de Alta Performance",
      desc: "Mentalidade, estética e performance em alto nível.",
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Treinos Personalizados",
      desc: "Protocolos exclusivos conforme seu objetivo.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Serviços Premium
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-2xl border border-zinc-800 hover:border-gold hover:-translate-y-2 transition"
            >
              <div className="text-gold mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
