import {Label} from "@radix-ui/react-label";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <form>
      <Label>
        <span>Valor</span>
        <Input type="number" />
      </Label>
      <Label>
        <span>Tu mensaje en la donacion</span>
        <Textarea />
      </Label>
    </form>
  );
}
