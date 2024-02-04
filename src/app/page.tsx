import {MercadoPagoConfig, Preference} from "mercadopago";
import {redirect} from "next/navigation";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

const client = new MercadoPagoConfig({accessToken: process.env.MP_ACCES_TOKEN!});

export default function HomePage() {
  async function donate(formData: FormData) {
    "use server";

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "donacion",
            title: formData.get("messege") as string,
            quantity: 1,
            unit_price: Number(formData.get("amount")),
          },
        ],
      },
    });

    redirect(preference.sandbox_init_point!);
  }

  return (
    <form action={donate} className=" m-auto grid max-w-96 gap-8 border p-6">
      <Label className="grid gap-2">
        <span>Valor</span>
        <Input name="amount" type="number" />
      </Label>
      <Label className="grid gap-2">
        <span>Tu mensaje en la donacion</span>
        <Textarea name="message" />
      </Label>
      <Button type="submit">Send</Button>
    </form>
  );
}
