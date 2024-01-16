import Earth2 from "./Earth2";
import Earth from "./Earth1";
import Image from "next/image";
import { footerGalaxy } from "@public";

export default function Globe() {
	return (
		<div className="overflow-hidden relative">
			<div className={`relative z-[2] max-sm:hidden`}>
				<Earth />
			</div>
			<div className={`relative z-[2] sm:hidden`}>
				<Earth2 />
			</div>
			<Image
				className="absolute bottom-0 left-0 w-full h-full object-cover d-block pointer-events-none"
				width="801"
				height="807"
				loading="lazy"
				decoding="async"
				alt=""
				aria-hidden="true"
				src={footerGalaxy}
			/>
		</div>
	);
}
