import Image from "next/image";

import Banner from "@/Components/Banner";
import ScrollStackImages from "@/Components/ScrollStackImages";
import ServicesSection from "@/Components/ServicesSection";
import GetinTouch from "@/Components/GetinTouch";
import NewsCard from "@/Components/NewsCard";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
export default function Home() {
  return (
    <div>

      <Banner />
      <About />
      {/* <New /> */}
      <ScrollStackImages />
      <ServicesSection />
      <GetinTouch />
      <NewsCard />
   
    </div>
  );
}
