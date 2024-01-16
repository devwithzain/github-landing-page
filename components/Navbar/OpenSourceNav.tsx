"use client";
import Image from "next/image";
import { useState } from "react";
import { dropDown } from "@public";
import { openSourceNavItem, openSourceNavItem1 } from "@constants";

export default function OpenSourceNav() {
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
			id="myLi"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<button
				onClick={handleOnclick}
				type="button"
				className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between max-lg:font-semibold max-lg:w-full ${
					show ? "lg:text-neutral-300" : ""
				}`}>
				Open Source
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
				className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[320px] transition ease-in duration-150 ${
					show ? "opacity-100 visible" : "opacity-0 hidden"
				}`}>
				{openSourceNavItem.map((item) => (
					<>
						<div className="lg:border-b-[1px] mb-4 pb-6 pt-4 w-full">
							<span className="text-neutral-800 font-semibold text-base hover:text-blue-600 cursor-pointer">
								{item.title}
								<p className="text-sm font-normal text-neutral-500">
									{item.subTitle}
								</p>
							</span>
						</div>
					</>
				))}
				{openSourceNavItem1.map((items) => (
					<div
						className="mb-4 pb-0 pt-2 w-full"
						key={items.id}>
						<span className="text-neutral-800 font-semibold text-base">
							{items.title}
						</span>
						{items.links.map((link) => (
							<ul
								className="text-sm text-neutral-500 mt-1 w-full"
								key={link.id}>
								<li>
									<a
										href=""
										className="block py-2 hover:text-blue-600">
										{link.title}
									</a>
								</li>
							</ul>
						))}
					</div>
				))}
			</div>
		</li>
	);
}
