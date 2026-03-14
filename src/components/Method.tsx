import Anim from "animations/mindor-method";
import React, { useState } from "react";

const steps = [
	{
		number: "01",
		title: "Discover & Strategize",
		desc:
			"We begin by deeply understanding your business, audienceand market. The outcome is a sharp, actionable strategy that aligns your vision with user needs and market demand.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /><path d="M12 8v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Deep Understanding", "Actionable strategy"],
		color: "bg-blue-300",
	},
	{
		number: "02",
		title: "Design What Matters",
		desc:
			"Our team crafts seamless wireframes and high-impact UI/UX tailored for real users. Every element is designed to drive engagement, improve usabilityand convert better.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2" /><path d="M9 12h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["High-impact UI/UX", "Seamless Design"],
		color: "bg-blue-400",
	},
	{
		number: "03",
		title: "Build for Performance",
		desc:
			"We develop scalable, secureand high-performance products through agile sprints. Rigorous testing ensures stability, speedand a flawless launch experience.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" /><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Scalable & Secure", "High Performance"],
		color: "bg-blue-300",
	},
	{
		number: "04",
		title: "Scale with Confidence",
		desc:
			"Post-launch, we focus on performance, updatesand smart iterations. Our goal is long-term success with continuous optimization and growth strategies that keep you ahead.",
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2" /><path d="M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
		),
		labels: ["Continuous Growth", "Smart Iterations"],
		color: "bg-blue-300",
	},
];

export default function Method() {
	const [selected, setSelected] = useState(0);

	const indicatorLeft = `calc(${(selected / (steps.length - 1)) * 100}% - 30px)`;

	return (
		<section className=" bg-white py-14 md:py-16 flex justify-center">
			<div className="max-w-6xl flex flex-col md:flex-row items-start gap-10 md:gap-12 px-4 md:px-0">

				<div className="flex-1 flex flex-col gap-4 md:gap-5">
					<h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">The Mindor Method</h2>

					{steps.map((step, idx) => (
						<button
							key={step.number}
							className={`group relative flex items-start gap-4 p-4 rounded-xl transition-all duration-200 text-left focus:outline-none ${selected === idx ? 'bg-blue-50/80 ring-1 ring-blue-100' : 'bg-transparent'
								}`}
							onClick={() => setSelected(idx)}
							tabIndex={0}
						>
							<div
								className={`w-20 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border ${selected === idx
										? 'bg-blue-100 text-blue-700 '
										: 'bg-gray-100 text-gray-600 border-gray-200'
									}`}
							>
								{step.number}
							</div>

							<div>
								<div className="font-semibold text-gray-900 text-base md:text-lg mb-1">
									{step.title}
								</div>
								<div className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
									{step.desc}
								</div>
							</div>

						</button>
					))}
				</div>

				<Anim index={selected} />
			</div>
		</section>
	);
}