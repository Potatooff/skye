import Container from "@/components/Container";
import HeroOrbitingCircles from "@/components/hero/hero-orbiting-circles";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <HeroOrbitingCircles />
          <div className="w-3/4 rounded-md border border-input p-1.5">
            <Textarea
              placeholder="What would you like to ask?"
              className="h-24 resize-none border-none outline-none ring-0 focus-visible:outline-none focus-visible:ring-0"
            />
            <div className="flex items-center justify-between pt-2"> 
              <Button size="sm" variant="ghost">
                Change model
                <ArrowTopRightIcon className="ml-2" />
              </Button>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="secondary">
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


