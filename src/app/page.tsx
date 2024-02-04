import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

export default function HomePage() {
  async function donate(fromData: FormData) {
    "use server";
    console.log(fromData);
  }

  return (
    <form className=" m-auto grid max-w-96 gap-8 border p-6">
      <Label className="grid gap-2">
        <span>Valor</span>
        <Input type="number" />
      </Label>
      <Label className="grid gap-2">
        <span>Tu mensaje en la donacion</span>
        <Textarea />
      </Label>
      <Button type="submit">Send</Button>
    </form>
  );
}
