import { Metadata } from "next";
import { Link } from "next-view-transitions";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - About",
  description: "the person behind the website",
};

const header = "Hello world!";
const subheader = "My name is Justin.";
const description: string =
  "I'm a mobile developer by day and a game developer by night.";

export default function AboutPage() {
  return (
    <div className="font-frutiger">
      <Link href="/">
        <MetroStandaloneEmblem
          accentColor="purple"
          letter="J"
          viewTransitionName="logo"
        />
        <h1>{header}</h1>
        <h2>{subheader}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}
