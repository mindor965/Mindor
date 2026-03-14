import React from "react";

const needs = [
  {
    title: "Precise Audience Targeting",
    description:
      "Reach the right people based on their interests, behaviorsand intent — not just a broad crowd.",
  },
  {
    title: "Stronger Brand Presence",
    description:
      "Build awareness, trustand authority across platforms like Google, Instagramand YouTube.",
  },
  {
    title: "High-Quality Leads & Conversions",
    description:
      "Attract people who are already searching for what you offer and turn them into loyal customers.",
  },
  {
    title: "Real-Time Performance Tracking",
    description:
      "Know what’s working, what’s notand where every rupee goes with full transparency.",
  },
  {
    title: "Cost-Effective Growth",
    description:
      "Spend smarter, not harder. Get better returns than traditional marketing without blowing your budget.",
  },
  {
    title: "Stay Ahead of the Competition",
    description:
      "Outperform competitors by being present, visibleand relevant in every digital moment that matters.",
  },
];

const Need: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F6FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Business Needs Digital marketing
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Your customers are online, searching, scrollingand buying. If your business isn’t where they are, you’re missing out. Digital marketing is essential for visibility, growthand staying ahead of the competition.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {needs.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#EDEEFF] border-2 border-[#C7C8F4] rounded-xl shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Need;