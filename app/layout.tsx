import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Nike. Just Do It. Nike IN",
	description: "Nike Landing Page",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
