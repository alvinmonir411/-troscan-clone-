import Image from "next/image";

import Banner from "@/Components/Banner";
import ScrollStackImages from "@/Components/ScrollStackImages";
import ServicesSection from "@/Components/ServicesSection";
import GetinTouch from "@/Components/GetinTouch";
import NewsCard from "@/Components/NewsCard";

import About from "@/Components/About";
import Transform from "@/Components/Transform";
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      {/* the transform make by google ai studio  */}
      <Transform />
      {/* <New /> */}
      <ScrollStackImages />

      <ServicesSection />
      <GetinTouch />
      <NewsCard />
    </div>
  );
}
