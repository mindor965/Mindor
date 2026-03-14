import React from "react";

const digitalReasons = [
  {
    number: "1",
    title: "Data-Driven Strategies",
    description:
      "We believe in making decisions backed by solid data, not guesswork. Every campaign and tactic we implement is informed by analytics, market insightsand customer behavior to maximize your return on investment.",
  },
  {
    number: "2",
    title: "Customized Solutions",
    description:
      "Your business is uniqueand so are your goals. We don’t offer cookie-cutter packages. Instead, we tailor our digital marketing strategies to fit your brand, audienceand market — ensuring you get the most relevant and effective solutions.",
  },
  {
    number: "3",
    title: "Transparent Communication",
    description:
      "You’ll never be left in the dark. We provide clear, easy-to-understand reports and maintain open lines of communication so you always know how your campaigns are performing and what’s next.",
  },
  {
    number: "4",
    title: "Results-Focused Approach",
    description:
      "At the end of the day, results matter. We focus relentlessly on driving measurable outcomes — whether that’s increasing leads, boosting sales, or growing your brand awareness — all aligned with your business objectives.",
  },
  {
    number: "5",
    title: "Experienced and Passionate Team",
    description:
      "Our team is made up of seasoned digital marketers who bring creativity, technical expertiseand a passion for helping brands succeed. We stay up-to-date with the latest trends and technologies to keep you ahead of the curve.",
  },
  {
    number: "6",
    title: "Comprehensive Services Under One Roof",
    description:
      "From SEO and content marketing to paid ads and online reputation management, we offer end-to-end digital marketing services. This integrated approach ensures consistency and efficiency across all your channels.",
  },
];

const Chooseus: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Mindor for Your Digital Marketing?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalReasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-400 text-white font-bold text-lg mb-4">
                {reason.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
