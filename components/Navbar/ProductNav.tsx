"use client";
import Image from "next/image";
import { useState } from "react";
import { dropDown } from "@public";
import Navlist from "./NavUtils/Navlist";
import Navlist2 from "./NavUtils/Navlist2";
import { productNavItem, productNavItem2 } from "@constants";

export default function ProductNav() {
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
				onClick={() => setShow(!show)}
				type="button"
				className={`flex items-center p-1 max-lg:font-semibold  transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
					show ? "lg:text-neutral-300 " : ""
				}`}>
				Product
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
				className={`relative lg:absolute lg:flex -ml-5 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
					show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"
				}`}>
				<div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10">
					<ul className="max-lg:pl-6">
						{productNavItem.map((item) => (
							<li key={item.id}>
								<Navlist
									title={item.title}
									subTitle={item.subTitle}
									icon={item.icon}
								/>
							</li>
						))}
					</ul>
				</div>
				<div className="lg:px-8 lg:pr-20 py-2 max-lg:pl-6">
					<span className="my-1 text-neutral-800 font-semibold">Explore</span>
					<ul className="text-sm">
						<li className="text-neutral-500 hover:text-blue-500 py-2">
							<a href="#">All Features</a>
						</li>
						{productNavItem2.map((item) => (
							<div key={item.id}>
								<li className="py-2">
									<Navlist2
										title={item.title}
										icon={item.icon}
									/>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}
