import { Metadata } from "next";
import { Link } from "next-view-transitions";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Contact",
  description: "reaching out or just want to chat? here's how",
};

export default function ContactPage() {
  return (
    <div className="font-frutiger">
      <h1>Contact</h1>
      <Link href="/">
        <MetroStandaloneEmblem
          accentColor="purple"
          letter="J"
          viewTransitionName="logo"
        />
      </Link>
    </div>
  );
}
