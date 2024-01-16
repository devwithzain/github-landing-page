"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@components";
import { motion } from "framer-motion";
import { collabBracket } from "@public";
import { heroBrandsItem } from "@constants";

export default function Hero() {
	const [hovered1, setHovered1] = useState<boolean>(false);
	return (
		<div className="w-full relative min-h-screen">
			<Navbar />
			<div className="w-full min-h-[90vh] flex flex-col items-center justify-center pt-20">
				<div className="flex w-full">
					<div className="flex flex-col items-center md:mx-10">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="relative w-[20px">
							<div className="border-2 border-[#ffffff4d] w-[20px] h-[20px] rounded-full" />
							<span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3" />
						</motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "100%" }}
							transition={{ delay: 0.8 }}
							className="h-full w-[4px] mt-2 rounded-md bg-gradient-to-b from-transparent to-[#7C72FF]"
						/>
					</div>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.6, type: "tween" }}
						className="w-full mb-20 max-md:ml-4">
						<h1 className="relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
							{" "}
							Let&apos;s build from&nbsp;here
						</h1>
						<p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] text-[#7d8590]">
							The world’s leading AI-powered developer platform.
						</p>
					</motion.div>
				</div>
				<div className="flex relative w-full">
					<div className="flex flex-col items-center md:mx-10 relative">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1 }}
							className="relative w-[20px] my-6">
							<Image
								src={collabBracket}
								alt="bracket"
								className="text-white"
								width={20}
								height={20}
							/>
							<span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3" />
						</motion.div>
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: "100%" }}
							transition={{ delay: 1.2 }}
							className="h-full w-[4px] rounded-md bg-gradient-to-b  from-[#7C72FF] via-[#2DA44E ] to-[#3FB950]"
						/>
					</div>
					<div className="w-full h-full max-md:ml-4">
						<div className="flex lg:w-11/12 lg:space-x-5 max-lg:flex-col max-lg:gap-y-5">
							<form action="">
								<div className="grid max-md:grid-rows-2 md:grid-cols-[300px_minmax(200px,_1fr)]">
									<dl>
										<dd>
											<input
												className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
												placeholder="Email address"
												type="email"
												name="user_email"
												id="user_email"
												autoComplete="off"
												spellCheck="false"
											/>
										</dd>
									</dl>
									<button
										type="button"
										className="mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold">
										Sign up for GitHub
									</button>
								</div>
							</form>
							<span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0" />
							<Link
								onMouseEnter={() => setHovered1(true)}
								onMouseLeave={() => setHovered1(false)}
								href=""
								className="flex items-center w-full lg:w-[30%] justify-center text-[16px] py-3 px-3 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white">
								Start a free enterprise trial
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${
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
							</Link>
						</div>
						<div className="md:my-20 my-8">
							<p className="text-[20px] leading-[24px] text-[#7d8590]">
								Trusted by the world&apos;s leading&nbsp;organizations&nbsp;
								<span className="bg-blue-600 px-1 py-[0.3px] text-[12px]">
									↘︎
								</span>
							</p>
							<div className="flex flex-wrap gap-x-5 items-center w-full lg:w-[70%] justify-between">
								{heroBrandsItem.map((item) => (
									<div
										className="w-[70px] items-center h-[70px]"
										key={item.id}>
										<Image
											src={item.src}
											alt="Stripe logo"
											height="70"
											width="70"
											className="my-5 w-full h-full"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
