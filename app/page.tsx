import Hero from "@/components/Hero";

import Feature1 from "@/components/Feature/Feature1";
import Feature2 from "@/components/Feature/Feature2";
import Testimonial from "@/components/Testimonial";
import Component1 from "@/components/Component1";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature1 />
      <Feature2 />
      <Component1 />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}
