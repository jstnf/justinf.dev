import { Metadata } from "next";

import MetroStandaloneEmblem from "@/components/MetroStandaloneEmblem";

export const metadata: Metadata = {
  title: "justinf.dev - Contact",
  description: "reaching out or just want to chat? here's how"
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <MetroStandaloneEmblem accentColor="purple" letter="J" viewTransitionName="logo"/>
    </div>
  )
}