import "@styles/globals.css";
import type { Metadata } from "next";

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
			<body>{children}</body>
		</html>
	);
}
