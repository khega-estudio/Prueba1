"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const formatPrice = (n: number) =>
    n.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, buyer: form }),
      });
      if (!res.ok) throw new Error("Error al crear la preferencia de pago");
      const data = await res.json();
      if (data.init_point) {
        clearCart();
        window.location.href = data.init_point;
      } else {
        throw new Error("No se recibió el link de pago");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 py-20 gap-4 text-[#5E6644]/40">
        <span className="text-6xl">🛒</span>
        <p className="text-lg font-semibold">Tu carrito está vacío</p>
        <button
          onClick={() => router.push("/")}
          className="bg-[#5E6644] text-[#F4F0E8] font-black px-6 py-2.5 rounded-xl mt-2 uppercase tracking-wider text-sm hover:bg-[#464E30] transition-colors"
        >
          Ver productos
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-xs font-bold text-[#5E6644] uppercase tracking-[0.2em] mb-1">
          Último paso
        </p>
        <h1 className="text-3xl font-black text-[#2C2E22]">Finalizar pedido</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-sm font-black text-[#2C2E22] border-b border-[#E8E2D4] pb-2 uppercase tracking-widest">
            Tus datos
          </h2>

          <Field label="Nombre completo" name="name" value={form.name} onChange={handleChange} required placeholder="Juan Pérez" />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="juan@ejemplo.com" />
          <Field label="Teléfono / WhatsApp" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+54 9 221 000-0000" />

          <h2 className="text-sm font-black text-[#2C2E22] border-b border-[#E8E2D4] pb-2 pt-2 uppercase tracking-widest">
            Dirección de envío
          </h2>

          <Field label="Dirección" name="address" value={form.address} onChange={handleChange} required placeholder="Calle 1 Nro. 234" />
          <Field label="Ciudad / Localidad" name="city" value={form.city} onChange={handleChange} required placeholder="La Plata" />

          <div>
            <label className="block text-xs font-bold text-[#2C2E22]/60 mb-1 uppercase tracking-wider">
              Notas del pedido (opcional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Instrucciones de entrega, preferencias..."
              className="w-full border border-[#E8E2D4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E6644]/30 resize-none bg-white text-[#2C2E22]"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5E6644] hover:bg-[#464E30] disabled:opacity-60 text-[#F4F0E8] font-black py-4 rounded-xl transition-colors mt-4 uppercase tracking-widest text-sm"
          >
            {loading ? "Redirigiendo..." : "Pagar con MercadoPago →"}
          </button>

          <p className="text-xs text-center text-[#2C2E22]/40">
            Serás redirigido a MercadoPago para completar el pago de forma segura.
          </p>
        </form>

        {/* Resumen */}
        <div>
          <h2 className="text-sm font-black text-[#2C2E22] border-b border-[#E8E2D4] pb-2 mb-4 uppercase tracking-widest">
            Tu pedido
          </h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3 items-center bg-white rounded-xl p-3 border border-[#E8E2D4]">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#E8E2D4] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/placeholder.png";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#2C2E22] truncate">{item.name}</p>
                  <p className="text-xs text-[#5E6644]/60">{item.weight} × {item.quantity}</p>
                </div>
                <span className="text-sm font-black text-[#5E6644] flex-shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-[#E8E2D4] space-y-2">
            <div className="flex justify-between text-sm text-[#2C2E22]/60">
              <span>Subtotal</span>
              <span>{formatPrice(total())}</span>
            </div>
            <div className="flex justify-between text-sm text-[#2C2E22]/60">
              <span>Envío</span>
              <span className="text-[#5E6644] font-semibold">A coordinar</span>
            </div>
            <div className="flex justify-between font-black text-[#2C2E22] pt-2 border-t border-[#E8E2D4]">
              <span>Total</span>
              <span className="text-[#5E6644] text-lg">{formatPrice(total())}</span>
            </div>
          </div>

          <div className="mt-5 bg-[#5E6644]/8 border border-[#5E6644]/15 rounded-2xl p-4 text-xs text-[#5E6644] space-y-1">
            <p className="font-bold">🔒 Pago 100% seguro</p>
            <p className="text-[#2C2E22]/50">Procesamos pagos con MercadoPago. Tu información está protegida.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, name, value, onChange, required, placeholder, type = "text",
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#2C2E22]/60 mb-1 uppercase tracking-wider">
        {label}
      </label>
      <input
        name={name} type={type} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="w-full border border-[#E8E2D4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E6644]/30 bg-white text-[#2C2E22] placeholder:text-[#2C2E22]/30"
      />
    </div>
  );
}
