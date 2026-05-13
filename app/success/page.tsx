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
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">
        <div className="text-6xl mb-4">{isApproved ? "🎉" : "⏳"}</div>
        <h1 className="text-2xl font-black text-gray-800 mb-2">
          {isApproved ? "¡Pedido confirmado!" : "Pago pendiente"}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          {isApproved
            ? "Recibimos tu pago correctamente. En breve nos comunicamos para coordinar el envío."
            : "Tu pago está siendo procesado. Te avisaremos cuando se confirme."}
        </p>

        {paymentId && (
          <p className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2 mb-6">
            ID de pago: <span className="font-mono font-semibold">{paymentId}</span>
          </p>
        )}

        <div className="space-y-3">
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <span>💬</span> Coordinar envío por WhatsApp
          </a>
          <Link
            href="/"
            className="block w-full border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold px-6 py-3 rounded-xl transition-colors"
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
