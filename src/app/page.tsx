import Body from "@/components/Body";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="container min-h-screen">
      <Hero />
      <Clients />
      <Community />
      <Body />

    </main>
  )
}
