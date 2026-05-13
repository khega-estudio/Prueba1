import { NextRequest, NextResponse } from "next/server";
import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const { items, buyer } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No hay ítems en el carrito" }, { status: 400 });
    }

    const preference = new Preference(client);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const result = await preference.create({
      body: {
        items: items.map(
          (item: { id: string; name: string; price: number; quantity: number }) => ({
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price,
            currency_id: "ARS",
          })
        ),
        payer: {
          name: buyer.name,
          email: buyer.email,
          phone: { number: buyer.phone },
        },
        back_urls: {
          success: `${baseUrl}/success?status=approved`,
          failure: `${baseUrl}/checkout`,
          pending: `${baseUrl}/success?status=pending`,
        },
        auto_return: "approved",
        external_reference: `frodo-${Date.now()}`,
        metadata: {
          buyer_address: buyer.address,
          buyer_city: buyer.city,
          notes: buyer.notes,
        },
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (error) {
    console.error("MercadoPago error:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia de pago" },
      { status: 500 }
    );
  }
}
