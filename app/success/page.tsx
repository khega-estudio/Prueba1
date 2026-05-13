"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const paymentId = params.get("payment_id");
  const status = params.get("status");
  const isApproved = status === "approved" || !status;

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-20 px-4 text-center">
      <div className="bg-white rounded-3xl shadow-sm border border-[#E8E2D4] p-10 max-w-md w-full">
        <div className="text-5xl mb-4">{isApproved ? "✅" : "⏳"}</div>
        <p className="text-xs font-bold text-[#5E6644] uppercase tracking-[0.2em] mb-2">
          {isApproved ? "Pago confirmado" : "Pago pendiente"}
        </p>
        <h1 className="text-2xl font-black text-[#2C2E22] mb-3">
          {isApproved ? "¡Gracias por tu pedido!" : "Procesando tu pago"}
        </h1>
        <p className="text-[#2C2E22]/60 text-sm mb-6 leading-relaxed">
          {isApproved
            ? "Recibimos tu pago. En breve nos comunicamos para coordinar el envío."
            : "Tu pago está siendo procesado. Te avisamos cuando se confirme."}
        </p>

        {paymentId && (
          <p className="text-xs text-[#2C2E22]/40 bg-[#F4F0E8] rounded-lg px-3 py-2 mb-6 font-mono">
            ID: {paymentId}
          </p>
        )}

        <div className="space-y-3">
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#5E6644] hover:bg-[#464E30] text-[#F4F0E8] font-black px-6 py-3 rounded-xl transition-colors text-sm uppercase tracking-wider"
          >
            <span>💬</span> Coordinar envío por WhatsApp
          </a>
          <Link
            href="/"
            className="block w-full border border-[#E8E2D4] hover:bg-[#F4F0E8] text-[#2C2E22]/60 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
