"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CodeSpace from "./CodeSpace";
import HoverCard from "./HoverCard";
import { motion } from "framer-motion";
import {
	actionsPro,
	mobile,
	proArc,
	proBag,
	proCover,
	procodeSpace,
} from "@public";

export default function Productivity() {
	const [hovered, setHovered] = useState<boolean>(false);
	const [hovered1, setHovered1] = useState<boolean>(false);
	const [hovered2, setHovered2] = useState<boolean>(false);

	return (
		<div className="w-full relative">
			<div className="flex md:pl-10 space-x-3 md:space-x-10">
				<div className="flex flex-col items-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: false }}
						className="relative w-[20px] mb-4">
						<Image
							src={proBag}
							alt="bag"
							width={30}
							height={30}
						/>
						<span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3" />
					</motion.div>
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						transition={{ duration: 0.4, delay: 0.6 }}
						className=" h-full w-[4px] mt-7 rounded-md bg-gradient-to-b from-[#3fb950] via-[#2ea043] to-transparent"
					/>
				</div>
				<div className="md:w-10/12 mb-24 w-full">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.3 }}
						viewport={{ once: false }}
						className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
						style={{ transitionDelay: "200ms" }}>
						Productivity
					</motion.div>
					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.3 }}
						viewport={{ once: false }}
						className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
						style={{ transitionDelay: "300ms" }}>
						<span className="text-[#33b3ae]">Accelerate innovation</span>
						<br />
						Our AI-powered platform increases the pace of software development.
					</motion.h3>
				</div>
				<div className="relative w-[50%] lg:block hidden">
					<Image
						src={proArc}
						alt="asdasd"
						width={1225}
						height={1025}
						className="absolute right-[-60%] top-20 w-full h-full -z-10"
					/>
				</div>
			</div>
			<Image
				className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]  "
				width="2500"
				height="1500"
				loading="lazy"
				decoding="async"
				alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
				src={proCover}
			/>
			<CodeSpace />
			<div className="relative z-[1]">
				<HoverCard
					backgroundColor="#939aff"
					direction=""
					className="w-full"
					left="0">
					<div className="overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6 justify-between md:min-w-[400px]">
						<p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
							<span className="text-white font-medium">GitHub Actions </span>
							automates your build, test, and deployment workflow with simple
							and secure CI/CD.
						</p>
						<div>
							<Link
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
								href=""
								className="py-1 inline-block text-xl text-white font-semibold">
								Discover GitHub Actions
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
										hovered ? "translate-x-0 " : "-translate-x-1"
									}`}
									width="20"
									height="20"
									viewBox="0 0 16 16"
									fill="none">
									<path
										fill="currentColor"
										d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
									/>
									<path
										className={` text-white transition ease-in duration-150 ${
											hovered ? " opacity-100" : "opacity-0 "
										}`}
										stroke="currentColor"
										d="M1.75 8H11"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
								<div
									className={` ${
										hovered ? "w-11/12 scale-100" : "w-0 scale-0"
									} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
								/>
							</Link>
						</div>
					</div>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ type: "tween" }}
						className="rounded-r-md overflow-hidden flex items-center">
						<Image
							className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right"
							width="400"
							height="200"
							loading="lazy"
							decoding="async"
							alt="actionsPro"
							aria-hidden="true"
							src={actionsPro}
						/>
					</motion.div>
				</HoverCard>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex justify-between md:space-x-10 max-md:flex-col">
					<HoverCard
						backgroundColor="#7ee787"
						direction="flex-col"
						left="0"
						className="lg:w-[50%] w-full">
						<div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
							<p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
								<span className="text-white font-semibold">
									GitHub Codespaces{" "}
								</span>
								offers a complete dev environment in seconds. Code, build, test,
								and open pull requests from any repo.
							</p>
							<div>
								<Link
									onMouseEnter={() => setHovered1(true)}
									onMouseLeave={() => setHovered1(false)}
									href=""
									className=" md:text-xl text-white font-semibold inline-block">
									Check out GitHub Codespaces
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${
											hovered1 ? "translate-x-0 " : "-translate-x-1"
										}`}
										width="20"
										height="20"
										viewBox="0 0 16 16"
										fill="none">
										<path
											fill="currentColor"
											d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
										/>
										<path
											className={` text-white transition ease-in duration-150 ${
												hovered1 ? " opacity-100" : "opacity-0 "
											}`}
											stroke="currentColor"
											d="M1.75 8H11"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<div
										className={` ${
											hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"
										} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
									/>
								</Link>
							</div>
						</div>
						<div className="overflow-hidden rounded-s-lg">
							<Image
								className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate"
								width="1209"
								height="890"
								loading="lazy"
								decoding="async"
								alt=""
								aria-hidden="true"
								src={procodeSpace}
							/>
						</div>
					</HoverCard>
					<HoverCard
						backgroundColor="#7ee787"
						direction="flex-col"
						left="-400px"
						className="lg:w-[50%] w-full">
						<div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
							<p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
								<span className="text-white font-semibold">GitHub Mobile </span>
								fits your projects in your pocket, so you never miss a beat
								while on the go.
							</p>
							<div>
								<Link
									onMouseEnter={() => setHovered2(true)}
									onMouseLeave={() => setHovered2(false)}
									href=""
									className=" md:text-xl text-white font-semibold inline-block">
									Download GitHub Mobile
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${
											hovered2 ? "translate-x-0 " : "-translate-x-1"
										}`}
										width="20"
										height="20"
										viewBox="0 0 16 16"
										fill="none">
										<path
											fill="currentColor"
											d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
										/>
										<path
											className={` text-white transition ease-in duration-150 ${
												hovered2 ? " opacity-100" : "opacity-0 "
											}`}
											stroke="currentColor"
											d="M1.75 8H11"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<div
										className={` ${
											hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"
										} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
									/>
								</Link>
							</div>
						</div>
						<div className="overflow-hidden rounded-s-lg">
							<Image
								className="w-full  h-auto"
								width="1208"
								height="764"
								loading="lazy"
								decoding="async"
								alt=""
								aria-hidden="true"
								src={mobile}
							/>
						</div>
					</HoverCard>
				</div>
			</div>
			<motion.div
				initial={{ height: 0 }}
				whileInView={{ height: "160px" }}
				transition={{ delay: 0.3 }}
				viewport={{ once: false }}
				className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[4px] rounded-md bg-gradient-to-b from-transparent to-[#33b3ae]"
			/>
		</div>
	);
}
