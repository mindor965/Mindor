import Image from "next/image";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Get found when it matters most. We optimize your website for both search engines and users, using a full-stack SEO approach—from keyword research and technical fixes to content optimization and backlinks. The goal? Higher rankings, more organic trafficand better-quality leads over time.",
    image: "/assets/seo.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "Social isn’t just for likes — it’s for building trust and community. We create scroll-stopping content, manage your profilesand run targeted campaigns.",
    image: "/assets/social.png",
  },
  {
    title: "Paid Marketing Campaigns",
    description:
      "Reach your audience fast and stay ahead of the competition. From Google Search to Facebook and Instagram Ads, we run high-performance campaigns.",
    image: "/assets/paid.png",
  },
  {
    title: "Content Marketing",
    description:
      "Great content builds authority and trust. We help you craft blogs, website content, landing pages, product descriptionsand copy that educates and converts.",
    image: "/assets/content.png",
  },
  {
    title: "Email Marketing",
    description:
      "Your best leads are the ones who already know you. We help you reach them with email strategies that include list building, automated workflowsand more.",
    image: "/assets/email.png",
  },
  {
    title: "Online Reputation Management",
    description:
      "People often judge your brand before they ever visit your website—through reviews, search resultsand social feedback. We monitor, protectand enhance your reputation.",
    image: "/assets/Offline.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Digital Marketing Solutions Designed for Growth
      </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transition duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-blue-400"
          >
            <div>
              <h2 className="font-semibold text-lg mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
            <div className="relative w-full h-40 mt-2">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}