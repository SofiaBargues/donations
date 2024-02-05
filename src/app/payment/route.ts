import type {NextRequest} from "next/server";

import {MercadoPagoConfig, Payment} from "mercadopago";
import {createClient} from "@supabase/supabase-js";

const mercadopago = new MercadoPagoConfig({accessToken: process.env.MP_ACCES_TOKEN!});
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET!);

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id: string}});
  const payment = await new Payment(mercadopago).get({id: body.data.id});
  const donation = {
    id: payment.id,
    amount: payment.transaction_amount,
    message: payment.description,
  };

  console.log("payment:", payment);

  const result = await supabase.from("donations").insert(donation);

  console.log("result:", result);

  return Response.json({success: true});
}

export async function GET(request: NextRequest) {
  const donation = {
    id: 123,
    amount: 1000,
    message: "prueba",
  };

  const result = await supabase.from("donations").insert(donation);

  console.log("result:", result);

  return Response.json({success: true});
}
