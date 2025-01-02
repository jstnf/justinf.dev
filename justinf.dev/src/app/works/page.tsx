import { Metadata } from "next";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Works",
  description: "my past projects and experience",
};

export default function WorksPage() {
  return (
    <div>
      <h1>Works</h1>
      <MetroStandaloneEmblem
        accentColor="purple"
        letter="J"
        viewTransitionName="logo"
      />
    </div>
  );
}
