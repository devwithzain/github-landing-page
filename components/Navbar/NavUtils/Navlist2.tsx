"use client";
import Link from "next/link";
import { share } from "@public";
import Image from "next/image";
import { TnavList2Props } from "@types";
import React, { useState } from "react";

export default function Navlist2({ title }: TnavList2Props) {
	const [focus, setFocus] = useState<boolean>(false);
	return (
		<Link
			onMouseEnter={() => setFocus(true)}
			onMouseLeave={() => setFocus(false)}
			href="#"
			className={`flex  items-center ${
				focus ? "text-blue-600" : "text-neutral-500"
			}`}>
			{title}
			<Image
				src={share}
				alt="share"
				width={16}
				height={16}
				className={`octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 transition ease-in duration-150 ${
					focus
						? " translate-x-0 text-blue-500 opacity-100"
						: " -translate-x-3 opacity-0"
				}`}
			/>
		</Link>
	);
}
