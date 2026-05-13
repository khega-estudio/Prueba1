import { products } from "@/app/lib/products";
import ProductCard from "@/app/components/ProductCard";

export default function HomePage() {
  const pastas = products.filter((p) => p.category === "pastas");
  const otros = products.filter((p) => p.category === "otros");

  return (
    <main className="bg-[#F4F0E8]">
      {/* Hero */}
      <section className="relative bg-[#5E6644] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #F4F0E8 0px, #F4F0E8 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F4F0E8 0px, #F4F0E8 1px, transparent 1px, transparent 40px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block border border-[#F4F0E8]/30 text-[#F4F0E8]/70 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
              2024 · La Plata · Artesanal
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#F4F0E8] leading-none tracking-tight">
              FRÖDO
            </h1>
            <div className="flex items-center gap-3 mt-3 mb-6 justify-center md:justify-start">
              <div className="h-px w-10 bg-[#F4F0E8]/40" />
              <p className="text-[#F4F0E8]/70 text-sm font-medium tracking-widest uppercase">
                Pastas artesanales
              </p>
              <div className="h-px w-10 bg-[#F4F0E8]/40" />
            </div>
            <p className="text-[#F4F0E8]/80 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
              Maní, tahini, miel y hummus. Elaborados sin conservantes,
              sin aditivos. Solo ingredientes reales.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#productos"
                className="bg-[#F4F0E8] text-[#5E6644] font-black px-7 py-3 rounded-xl hover:bg-white transition-colors tracking-wide text-sm uppercase"
              >
                Ver productos
              </a>
              <a
                href="#nosotros"
                className="border border-[#F4F0E8]/40 text-[#F4F0E8]/80 font-bold px-7 py-3 rounded-xl hover:bg-[#F4F0E8]/10 transition-colors text-sm uppercase tracking-wide"
              >
                Nuestra historia
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#F4F0E8]/5 border border-[#F4F0E8]/10" />
              <div className="absolute inset-8 rounded-full bg-[#F4F0E8]/5 border border-[#F4F0E8]/10" />
              <span className="text-[8rem] md:text-[10rem] leading-none select-none relative z-10">
                🥜
              </span>
            </div>
          </div>
        </div>

        {/* Transición */}
        <div className="h-16 bg-gradient-to-b from-[#5E6644] to-[#F4F0E8]" />
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🌱", value: "100%", label: "Natural" },
            { icon: "🚫", value: "Sin", label: "Conservantes" },
            { icon: "💪", value: "25g", label: "Proteína / 100g" },
            { icon: "📍", value: "La Plata", label: "Hecho acá" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 flex flex-col items-center text-center border border-[#E8E2D4]"
            >
              <span className="text-2xl mb-1">{stat.icon}</span>
              <span className="text-xl font-black text-[#5E6644]">{stat.value}</span>
              <span className="text-xs text-[#2C2E22]/50 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pastas de maní */}
      <section id="productos" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="mb-8 flex items-end justify-between border-b border-[#E8E2D4] pb-4">
          <div>
            <p className="text-xs font-bold text-[#5E6644] uppercase tracking-[0.2em] mb-1">
              Nuestras estrellas
            </p>
            <h2 className="text-3xl font-black text-[#2C2E22] tracking-tight">
              Pastas de Maní
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pastas.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Otros productos */}
      <section className="bg-[#5E6644]/8 border-y border-[#E8E2D4]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-8 border-b border-[#5E6644]/20 pb-4">
            <p className="text-xs font-bold text-[#5E6644] uppercase tracking-[0.2em] mb-1">
              Completá tu despensa
            </p>
            <h2 className="text-3xl font-black text-[#2C2E22] tracking-tight">
              También te va a encantar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otros.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-[#464E30] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-[#F4F0E8]/50 uppercase tracking-[0.2em] mb-3">
            Primera compra
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E8] mb-4 leading-tight">
            ¿Primera vez con FRÖDO?
          </h2>
          <p className="text-[#F4F0E8]/70 text-base mb-8">
            Armá tu combo ideal y descubrí por qué somos la pasta de maní favorita de La Plata.
          </p>
          <a
            href="#productos"
            className="inline-block bg-[#F4F0E8] text-[#464E30] font-black px-8 py-3.5 rounded-xl hover:bg-white transition-colors text-sm uppercase tracking-wider"
          >
            Explorar productos →
          </a>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold text-[#5E6644] uppercase tracking-[0.2em] mb-2">
              Nuestra historia
            </p>
            <h2 className="text-3xl font-black text-[#2C2E22] mb-5 leading-tight">
              Hechos con maní.<br />Hechos con cuidado.
            </h2>
            <p className="text-[#2C2E22]/60 leading-relaxed mb-4">
              FRÖDO nació en La Plata en 2024 con una idea simple: hacer las cosas bien.
              Ingredientes reales, procesos artesanales y sin atajos.
            </p>
            <p className="text-[#2C2E22]/60 leading-relaxed mb-6">
              Cada frasco sale de nuestra cocina con maní tostado de primera calidad,
              sin aceite de palma, sin azúcar agregada, sin conservantes.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Sin azúcar agregada",
                "Sin aceite de palma",
                "Gluten free",
                "Vegano",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#5E6644]/10 text-[#5E6644] text-xs font-bold px-3 py-1.5 rounded-full border border-[#5E6644]/20 tracking-wide"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌿", title: "Ingredientes reales", desc: "Solo lo que la naturaleza da, nada más." },
              { icon: "📍", title: "La Plata", desc: "Producción 100% local y artesanal." },
              { icon: "♻️", title: "Frascos reutilizables", desc: "Comprometidos con el medioambiente." },
              { icon: "🚚", title: "Envío rápido", desc: "Llega a tu puerta en 48-72 hs." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-[#E8E2D4] hover:border-[#5E6644]/30 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-black text-[#2C2E22] text-sm mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2C2E22]/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-[#5E6644] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-[#F4F0E8]/50 uppercase tracking-[0.2em] mb-2">
            Estamos acá
          </p>
          <h2 className="text-3xl font-black text-[#F4F0E8] mb-2">¿Tenés consultas?</h2>
          <p className="text-[#F4F0E8]/60 mb-8 text-sm">
            Escribinos por WhatsApp o Instagram y te respondemos enseguida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#F4F0E8] text-[#5E6644] font-black px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm uppercase tracking-wide"
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="https://instagram.com/frodo.mani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#F4F0E8]/30 text-[#F4F0E8] font-bold px-6 py-3 rounded-xl hover:bg-[#F4F0E8]/10 transition-colors text-sm uppercase tracking-wide"
            >
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#464E30] text-[#F4F0E8]/40 py-8 text-center text-xs">
        <p className="font-black text-[#F4F0E8] text-xl tracking-widest mb-1">FRÖDO</p>
        <p className="tracking-widest text-[0.65rem] uppercase">2024 · La Plata · Pastas Artesanales</p>
        <p className="mt-3">© {new Date().getFullYear()} Frödo. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
