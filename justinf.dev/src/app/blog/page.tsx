import { Metadata } from "next";
import { Link } from "next-view-transitions";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Blog",
  description: "random bits of my thoughts",
};

export default function BlogPage() {
  return (
    <div className="font-frutiger">
      <h1>Blog</h1>
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
