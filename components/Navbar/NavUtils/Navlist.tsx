"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TnavListProps } from "@types";

export default function Navlist({ title, subTitle, icon }: TnavListProps) {
	const [focus, setFocus] = useState<boolean>(false);
	return (
		<Link
			href="#"
			onMouseEnter={() => setFocus(true)}
			onMouseLeave={() => setFocus(false)}
			className="py-3 flex items-center space-x-3 cursor-pointer">
			<Image
				src={icon}
				alt="img"
				width={24}
				height={24}
				className={` mr-3 transition ease-in duration-100  ${
					focus ? "text-blue-600" : "text-neutral-500"
				}`}
			/>
			<div
				className={`${
					focus ? "text-blue-600" : "text-neutral-500"
				} transition ease-in duration-100   text-[14px]`}>
				<div
					className={`font-semibold transition ease-in duration-100  ${
						focus ? "text-blue-600" : "text-neutral-800"
					} text-base leading-5`}>
					{title}
				</div>
				{subTitle}
			</div>
		</Link>
	);
}
