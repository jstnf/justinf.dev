import { Metadata } from "next";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Blog",
  description: "random bits of my thoughts"
}

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <MetroStandaloneEmblem accentColor="purple" letter="J" viewTransitionName="logo"/>
    </div>
  )
}