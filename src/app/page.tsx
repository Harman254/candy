import Achievements from "@/components/Achievements";
import Calender from "@/components/Calender";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import CommunityUpdates from "@/components/CommunityUpdates";
import Customers from "@/components/Customers";
import FooterTitle from "@/components/FooterTitle";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Unlock from "@/components/Unlock";

export default function Home() {
  return (
    <main className="container  space-y-4 mx-auto min-h-screen">
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <SectionTitle />
      <CommunityUpdates />
      <FooterTitle />

    </main>
  )
}
