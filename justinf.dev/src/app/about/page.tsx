import { Metadata } from "next";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - About",
  description: "the person behind the website",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <MetroStandaloneEmblem
        accentColor="purple"
        letter="J"
        viewTransitionName="logo"
      />
    </div>
  );
}
