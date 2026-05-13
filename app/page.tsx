import { products } from "@/app/lib/products";
import ProductCard from "@/app/components/ProductCard";

export default function HomePage() {
  const pastas = products.filter((p) => p.category === "pastas");
  const otros = products.filter((p) => p.category === "otros");

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-white/30 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              100% Artesanal · Sin conservantes
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow">
              La mejor pasta
              <br />
              de maní de
              <br />
              <span className="text-yellow-900">tu vida</span>
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-md mx-auto md:mx-0">
              Elaborada artesanalmente con maní seleccionado. Sin aditivos, sin
              azúcar agregada. Pura bondad en cada frasco.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#productos"
                className="bg-white text-orange-500 font-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Ver productos →
              </a>
              <a
                href="#nosotros"
                className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Nuestra historia
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <span className="text-[10rem] md:text-[12rem] leading-none select-none">
                  🥜
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 30C840 40 960 50 1080 50C1200 50 1320 40 1380 35L1440 30V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#fafafa"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#fafafa] py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🌱", value: "100%", label: "Natural" },
            { icon: "🚫", value: "0", label: "Conservantes" },
            { icon: "💪", value: "25g", label: "Proteína / 100g" },
            { icon: "❤️", value: "Miles", label: "de clientes felices" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-2xl font-black text-orange-500">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pastas de maní */}
      <section id="productos" className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-gray-800">
            Pastas de Maní
            <span className="ml-2 text-orange-400">✦</span>
          </h2>
          <p className="text-gray-500 mt-1">
            Nuestras estrellas, elaboradas con maní seleccionado y tostado a la perfección.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastas.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Otros productos */}
      <section className="bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-800">
              También te va a encantar
              <span className="ml-2 text-amber-500">✦</span>
            </h2>
            <p className="text-gray-500 mt-1">
              Tahini, miel artesanal y hummus fresco para completar tu despensa saludable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otros.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿La primera vez que probás Frodo?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Armá un combo con tus sabores favoritos y descubrí por qué somos la
            pasta de maní preferida.
          </p>
          <a
            href="#productos"
            className="bg-white text-orange-500 font-black px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-block"
          >
            Explorar productos →
          </a>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
              Nuestra historia
            </span>
            <h2 className="text-3xl font-black text-gray-800 mt-2 mb-4">
              Hechos con amor y maní
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Frodo nació de una pasión por la alimentación real y los ingredientes
              honestos. Creemos que comer rico no debería significar comer mal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cada frasco que sale de nuestra cocina está hecho con maní de primera
              calidad, tostado artesanalmente y sin aditivos innecesarios.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Sin azúcar agregada", "Sin aceite de palma", "Gluten free", "Vegano"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-200"
                  >
                    ✓ {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌿", title: "Ingredientes reales", desc: "Solo usamos lo que la naturaleza da." },
              { icon: "🏠", title: "Producción local", desc: "Hecho en Argentina con orgullo." },
              { icon: "♻️", title: "Frascos reutilizables", desc: "Comprometidos con el medioambiente." },
              { icon: "🚀", title: "Envío rápido", desc: "Llega a tu puerta en 48-72 hs." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-amber-50 rounded-2xl p-4 hover:bg-amber-100 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-gray-800 text-sm mt-2">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="bg-gradient-to-br from-amber-900 to-orange-900 py-16"
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-2">¿Tenés consultas?</h2>
          <p className="text-amber-200 mb-8">
            Escribinos por WhatsApp o Instagram y te respondemos enseguida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="https://instagram.com/frodo.mani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p className="font-bold text-white text-lg mb-1">FRODO</p>
        <p>Pastas artesanales · Hecho con ❤️ en Argentina</p>
        <p className="mt-3 text-xs">© {new Date().getFullYear()} Frodo. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
