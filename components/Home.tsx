"use client";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import {
	Collaboration,
	Footer,
	Hero,
	Productivity,
	Security,
	StickyNav,
} from "@components";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div>
				<div className="overflow-hidden">
					<div className="md:px-12 max-md:px-5 overflow-hidden">
						<Hero />
					</div>
					<StickyNav />
					<div
						id="productivity"
						className="home-campaign-productivity md:px-12 max-md:px-5 pt-12 overflow-hidden">
						<Productivity />
					</div>
					<div
						id="security"
						className="home-campaign-productivity overflow-hidden md:px-12 max-md:px-5 pt-8">
						<Security />
					</div>
					<div
						id="collaboration"
						className="home-campaign-productivity md:px-12 max-md:px-5  overflow-hidden">
						<Collaboration />
					</div>
					<div className="w-full relative z-[2] md:px-12 max-md:px-5">
						<ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
							<li>
								<sup id="footnote-1">1</sup> This 7X times factor is based on
								data from the industry’s longest running analysis of fix rates
								Veracode State of Software Security 2023, which cites the
								average time to fix 50% of flaws as 198 days vs. GitHub’s fix
								rates of 72% of flaws with in 28 days which is at a minimum of
								7X faster when compared..
							</li>
							<br />
							<li>
								<sup id="footnote-2">2</sup>The Total Economic Impact™ Of GitHub
								Enterprise Cloud and Advanced Security, a commissioned study
								conducted by Forrester Consulting, 2022. Results are for a
								composite organization based on interviewed customers.
							</li>
							<br />
							<li>
								<sup id="footnote-3">3</sup> There are now 100 million
								developers around the world using GitHub.
								<Link href="https://github.blog/2023-01-25-100-million-developers-and-counting">
									Read the blog post.
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
