"use client";
import Image from "next/image";
import { lineVariant } from "@motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { arcGreenPro, bgStar, proCoverTop, proSideArc } from "@public";
import Link from "next/link";

export default function CodeSpace() {
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<div className="flex relative md:pl-10">
			<Image
				alt=""
				aria-hidden="true"
				width="2712"
				height="2712"
				className="absolute top-0 right-0 h-auto pointer-events-none"
				loading="lazy"
				decoding="async"
				src={bgStar}
			/>
			<div className="flex items-center flex-row relative">
				<motion.div
					variants={lineVariant}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false }}
					transition={{ duration: 0.3 }}
					className="w-[4px] h-full increase origin-top"
				/>
				<Image
					alt=""
					aria-hidden="true"
					width="81"
					height="485"
					style={{
						left: "calc(50% - 2px)",
						height: "auto",
						maxWidth: "9vw",
						transitionDelay: "100ms",
					}}
					className="hidden md:block absolute bottom-4 left-0"
					loading="lazy"
					decoding="async"
					src={arcGreenPro}
				/>
			</div>
			<div className="lg:pl-24 md:pl-16 pl-6">
				<div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
					<div className="py-4 mb-2 w-full">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ type: "tween", duration: 0.3 }}
							className="md:pr-6">
							<h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
								<span className="font-semibold text-white">GitHub Copilot</span>{" "}
								empowers developers to complete tasks 55% faster with
								contextualized AI coding assistance across workflows.
							</h2>
							<Link
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
								href="/"
								className="py-1 inline-block text-xl text-white font-semibold">
								Explore GitHub Copilot
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
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ type: "tween", duration: 0.3 }}
						className="py-4 px-6 w-full">
						<div className="relative">
							<div className="relative">
								<div className="md:absolute z-[1] top-[-200px] lg:top-[-500px] right-[30px] shadow-2xl">
									<Image
										src={proCoverTop}
										alt=""
										loading="lazy"
										decoding="async"
										width="600"
										height="300"
										className="w-full h-auto d-block rounded-lg"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "tween", duration: 0.3 }}
					className="mb-10 md:mb-32 pb-4 w-full flex">
					<div className="w-full">
						<div className="py-4 text-left">
							<div className="z-[1] inline-block rounded-full px-2 border border-[#3fb950] relative font-medium bg-gradient-to-r from-[#3fb950] to-[#4dca5e] bg-clip-text text-transparent">
								<span className="font-semibold text-[12px]">Did you know?</span>
							</div>
							<h3 className="text-[#3fb950] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
								22% increase
							</h3>
							<p className="mb-3 md:text-xl text-base font-medium text-white">
								in developer productivity after three <br /> years with GitHub
							</p>
						</div>
						<Link
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
							href="/"
							className="py-1 inline-block text-xl text-white font-semibold">
							Read the report
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
					<div className="relative w-full lg:block hidden">
						<Image
							src={proSideArc}
							alt="asdasd"
							width={800}
							height={600}
							className="absolute right-[-35%]"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
