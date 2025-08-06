import React from "react";
import NewsPost from "./../../Components/Shared/NewsPost";

const page = () => {
  const blogPosts = [
    {
      id: 1,
      date: "February 5, 2022",
      title: "The Art of Minimalist Interiors",
      excerpt: "Less is More: Designing Spaces That Speak Simplicity",
      image: "/news1.avif",
    },
    {
      id: 2,
      date: "February 22, 2022",
      title: "Timeless Furniture Pieces Every Home Needs",
      excerpt: "Building a Home That Never Goes Out of Style",
      image: "/news2.avif",
    },
    {
      id: 3,
      date: "January 21, 2023",
      title: "Psychology in Interior Design",
      excerpt: "Shaping Emotions Through Thoughtful Color Choices",
      image: "/news3.avif",
    },
    {
      id: 4,
      date: "March 15, 2023",
      title: "Sustainable Design Practices",
      excerpt: "Eco-Friendly Interiors That Don’t Compromise on Style",
      image: "/news4.avif",
    },
    {
      id: 5,
      date: "June 2, 2023",
      title: "Mixing Vintage with Modern",
      excerpt: "Creating a Bold Harmony Between Old and New",
      image: "/news5.avif",
    },
    {
      id: 6,
      date: "August 1, 2023",
      title: "Color Trends for 2024",
      excerpt: "From Earthy Tones to Bold Accents – What’s In Next Year",
      image: "/news6.avif",
    },
  ];

  return (
    <div className=" px-10 py-30 text-[#8d493a]  mx-auto">
      <div className="mb-6">
        <h1 className="text-5xl text-center font-semibold font-sans">
          Expert Insights and <br />
          Design Inspiration
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {blogPosts.map((blog, index) => (
          <NewsPost key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
