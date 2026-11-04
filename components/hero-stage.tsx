import Image from "next/image";
import { PeopleIcon } from "./icons";

export function HeroStage() {
  return (
    <figure className="mx-auto w-full max-w-md rounded-3xl border-2 border-plum-ink bg-cream p-5 text-plum-ink shadow-[0_10px_0_#302547] sm:p-7">
      <p className="text-sm font-semibold text-plum-ink/70">A plan could look like this</p>
      <div className="relative my-3 h-44 sm:h-56">
        <Image src="/brand/meetup.png" alt="Friends sharing coffee at a café" fill sizes="(max-width: 640px) 85vw, 390px" className="object-contain" priority />
      </div>
      <figcaption className="border-t border-plum-ink/20 pt-4">
        <h2 className="text-2xl font-bold">Coffee &amp; a catch-up</h2>
        <p className="mt-2 text-base">Today, 6:30 PM · At the café</p>
        <p className="mt-3 flex items-center gap-2 text-sm font-medium"><PeopleIcon className="h-5 w-5" />3 people going</p>
      </figcaption>
    </figure>
  );
}
