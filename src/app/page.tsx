import BasicLayout from "@/layouts/basicLayout";
import {HeroSection} from "./(sections)/HeroSection";
import About from "./(sections)/about";
import Product from "./(sections)/Productpage";
import ContactUs from "./(sections)/ContactUs";

export default function Home() {
  return (
    <BasicLayout>
      <HeroSection />
      <About />
      <Product />
      <ContactUs />
    </BasicLayout>
  );
}