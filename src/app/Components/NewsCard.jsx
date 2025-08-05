import React from "react";
import NewsPost from "./Shared/NewsPost";

const NewsCard = () => {
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
  ];

  return (
    <div className=" px-10 py-30 text-[#8d493a]  mx-auto">
      <div className="mb-6">
        <li className="font-semibold text-lg mb-2">News</li>
        <div className="flex justify-between items-center flex-wrap gap-6">
          <h1 className="text-5xl font-semibold font-sans">
            Stay Inspired with
            <br />
            Interior Trends
          </h1>
          <button className="bg-[#8d493a] text-white px-6 py-3 rounded hover:bg-[#7a3d2c] transition">
            View All News
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {blogPosts.map((blog, index) => (
          <NewsPost key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
