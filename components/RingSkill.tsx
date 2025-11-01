"use client"

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RingSkillProps {
	skill: string;
	targetPercentage: number;
	color?: string;
}

export default function RingSkill({ 
	skill, 
	targetPercentage, 
	color = "text-emerald-400" 
}: RingSkillProps) {
	const ringRef = useRef<SVGCircleElement>(null);
	const percentageRef = useRef<HTMLSpanElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	// Mobile-first: default to mobile size
	const [dimensions, setDimensions] = useState({ size: 80, radius: 32, center: 40, strokeWidth: 4 });

	useEffect(() => {
		const updateDimensions = () => {
			if (window.innerWidth < 640) {
				// Mobile
				setDimensions({ size: 80, radius: 32, center: 40, strokeWidth: 4 });
			} else if (window.innerWidth < 1024) {
				// Tablet
				setDimensions({ size: 140, radius: 60, center: 70, strokeWidth: 7 });
			} else {
				// Desktop
				setDimensions({ size: 160, radius: 70, center: 80, strokeWidth: 8 });
			}
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	useGSAP(() => {
		if (!ringRef.current || !percentageRef.current || !containerRef.current) return;

		const radius = dimensions.radius;
		const circumference = 2 * Math.PI * radius;

		// Set initial stroke-dasharray and ensure starting at 0
		ringRef.current.style.strokeDasharray = `${circumference}`;
		ringRef.current.style.strokeDashoffset = `${circumference}`;
		if (percentageRef.current) {
			percentageRef.current.textContent = "0%";
		}

		const animation = gsap.to(ringRef.current, {
			strokeDashoffset: circumference - (circumference * targetPercentage) / 100,
			duration: 2,
			ease: "power2.out",
			paused: true,
		});

		const percentageAnimation = gsap.to(
			{ value: 0 },
			{
				value: targetPercentage,
				duration: 2,
				ease: "power2.out",
				paused: true,
				onUpdate: function () {
					if (percentageRef.current) {
						percentageRef.current.textContent = `${Math.round(this.targets()[0].value)}%`;
					}
				},
			}
		);

		// Use ScrollTrigger for all devices - animate based on scroll progress
		const scrollTrigger = ScrollTrigger.create({
			trigger: containerRef.current,
			start: "top 80%",
			end: "bottom 20%",
			scrub: true,
			onUpdate: (self) => {
				// Update animation progress based on scroll position
				animation.progress(self.progress);
				percentageAnimation.progress(self.progress);
			},
		});

		return () => {
			scrollTrigger.kill();
			animation.kill();
			percentageAnimation.kill();
		};
	}, [targetPercentage, dimensions]);

	return (
		<div ref={containerRef} className="flex flex-col items-center justify-center gap-4 w-full">
			<div className="relative flex items-center justify-center">
				<svg 
					className="transform -rotate-90 w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px]" 
					width={dimensions.size} 
					height={dimensions.size}
					viewBox={`0 0 ${dimensions.size} ${dimensions.size}`}
				>
					{/* Background ring */}
					<circle
						cx={dimensions.center}
						cy={dimensions.center}
						r={dimensions.radius}
						stroke="currentColor"
						strokeWidth={dimensions.strokeWidth}
						fill="none"
						className="text-neutral-800"
					/>
					{/* Progress ring */}
					<circle
						ref={ringRef}
						cx={dimensions.center}
						cy={dimensions.center}
						r={dimensions.radius}
						stroke="currentColor"
						strokeWidth={dimensions.strokeWidth}
						fill="none"
						strokeLinecap="round"
						className={color}
					/>
				</svg>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
					<span ref={percentageRef} className="text-sm sm:text-2xl lg:text-3xl font-bold text-white leading-none">
						0%
					</span>
					<span className="text-[10px] sm:text-sm text-neutral-400 mt-0.5 leading-tight">{skill}</span>
				</div>
			</div>
		</div>
	);
}

