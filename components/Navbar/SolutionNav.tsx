"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navlist2 from "./NavUtils/Navlist2";
import {
	solutionNavItem,
	solutionNavItem1,
	solutionNavItem2,
} from "@constants";
import { dropDown, share } from "@public";

export default function SolutionNav() {
	const [show, setShow] = useState(false);
	const handleOnclick = () => {
		if (window.innerWidth < 1024) {
			setShow(!show);
		}
	};

	const handleMouseEnter = () => {
		if (window.innerWidth > 1024) {
			setShow(true);
		}
	};

	const handleMouseLeave = () => {
		if (window.innerWidth > 1024) {
			setShow(false);
		}
	};
	return (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<button
				onClick={handleOnclick}
				type="button"
				className={`flex max-lg:font-semibold  items-center p-1 max-lg:justify-between max-lg:w-full ${
					show ? "lg:text-neutral-300" : ""
				}`}>
				Solutions
				<Image
					src={dropDown}
					alt="dropDown"
					width={16}
					height={16}
					className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
						show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
					}`}
				/>
			</button>
			<div
				className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[300px] transition ease-in duration-300 ${
					show ? "opacity-100 " : "opacity-0 hidden top-[2000px]"
				}`}>
				{solutionNavItem.map((item) => (
					<div
						className="lg:border-b-[1px] mb-4 pb-4 pt-4 w-full"
						key={item.id}>
						<span className="text-neutral-800 font-semibold text-base">
							{item.title}
						</span>
						<ul className="text-sm text-neutral-500 mt-1 w-full">
							{item.links.map((link) => (
								<>
									<li key={link.id}>
										<Link
											href="/"
											className="block py-2 hover:text-blue-600">
											{link.title}
										</Link>
									</li>
								</>
							))}
							<li className="py-2">
								<Navlist2
									title="Education"
									icon={share}
								/>
							</li>
						</ul>
					</div>
				))}
				{solutionNavItem1.map((item) => (
					<div
						className="lg:border-b-[1px] mb-4 pb-4 pt-2 w-full"
						key={item.id}>
						<span className="text-neutral-800 font-semibold text-base">
							{item.title}
						</span>
						<ul className="text-sm text-neutral-500 mt-1 w-full">
							<li>
								<Link
									href="/"
									className="block py-2 hover:text-blue-600">
									CI/CD & Automation
								</Link>
							</li>
							{item.links.map((item) => (
								<li
									className="py-2"
									key={item.id}>
									<Navlist2
										title={item.title}
										icon={item.icon}
									/>
								</li>
							))}
						</ul>
					</div>
				))}
				{solutionNavItem2.map((item) => (
					<div
						className="mb-4 pb-4 pt-2 w-full"
						key={item.id}>
						<span className="text-neutral-800 font-semibold text-base">
							{item.title}
						</span>
						<ul className="text-sm text-neutral-500 mt-1 w-full">
							<li>
								<Link
									href="/"
									className="block py-2 hover:text-blue-600">
									Customer stories
								</Link>
							</li>
							{item.links.map((item) => (
								<li
									className="py-2"
									key={item.id}>
									<Navlist2
										title={item.title}
										icon={item.icon}
									/>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</li>
	);
}
