import React from "react";
import Marquee from "react-fast-marquee";

export const breakingNews = [
  {
    id: 1,
    title:
      "Bangladesh announces new economic measures to strengthen local industries",
    category: "Economy",
    publishedAt: "2026-11-28T09:30:00",
    url: "/news/1",
  },
  {
    id: 2,
    title:
      "Dhaka traffic authorities introduce new measures to ease city congestion",
    category: "National",
    publishedAt: "2026-11-28T09:15:00",
    url: "/news/2",
  },
  {
    id: 3,
    title:
      "International climate summit reaches agreement on renewable energy investment",
    category: "World",
    publishedAt: "2026-11-28T08:50:00",
    url: "/news/3",
  },
  {
    id: 4,
    title: "Bangladesh cricket team prepares for upcoming international series",
    category: "Sports",
    publishedAt: "2026-11-28T08:30:00",
    url: "/news/4",
  },
  {
    id: 5,
    title:
      "Global technology companies accelerate investment in artificial intelligence",
    category: "Technology",
    publishedAt: "2026-11-28T08:10:00",
    url: "/news/5",
  },
  {
    id: 6,
    title:
      "Education authorities announce updates to the upcoming academic calendar",
    category: "Education",
    publishedAt: "2026-11-28T07:45:00",
    url: "/news/6",
  },
  {
    id: 7,
    title:
      "Gold prices fluctuate amid changes in international market conditions",
    category: "Business",
    publishedAt: "2026-11-28T07:20:00",
    url: "/news/7",
  },
  {
    id: 8,
    title: "Scientists report new progress in clean energy storage technology",
    category: "Science",
    publishedAt: "2026-11-28T07:00:00",
    url: "/news/8",
  },
  {
    id: 9,
    title:
      "Heavy rainfall forecast prompts weather advisory across several regions",
    category: "Weather",
    publishedAt: "2026-11-28T06:40:00",
    url: "/news/9",
  },
  {
    id: 10,
    title:
      "Public health campaign focuses on improving healthcare awareness nationwide",
    category: "Health",
    publishedAt: "2026-11-28T06:15:00",
    url: "/news/10",
  },
];
const BreakingNews = () => {
  return (
    <div className="flex bg-gray-200 py-4 px-4 container mx-auto gap-4">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={80}>
        {breakingNews.map((news) => (
          <span className="pl-8" key={news.id}>
            {" "}
            [{news.category}] : {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
