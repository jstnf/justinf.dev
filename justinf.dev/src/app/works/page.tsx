import { Metadata } from "next";
import { Link } from "next-view-transitions";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Works",
  description: "my past projects and experience",
};

export default function WorksPage() {
  return (
    <div className="flex items-center gap-4 bg-stone-900 p-4 font-frutiger">
      <Link href="/">
        <MetroStandaloneEmblem
          accentColor="purple"
          letter="J"
          viewTransitionName="logo"
        />
      </Link>
      <div className="flex translate-y-0.5 flex-col">
        <p className="text-4xl font-bold">Past Works</p>
        <p className="text-lg">出来たこと</p>
      </div>
    </div>
  );
}
