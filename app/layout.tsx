import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Github",
	description: "Github Landing Page Clone",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
