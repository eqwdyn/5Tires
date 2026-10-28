import { Advantages } from "@widgets/Advantages";
import { Contacts } from "@widgets/Contacts";
import { Faq } from "@widgets/Faq";
import { Hero } from "@widgets/Hero";
import { Services } from "@widgets/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Advantages />
      <Faq />
      <Contacts />
    </>
  );
}
