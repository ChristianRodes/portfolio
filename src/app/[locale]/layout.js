import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Providers } from "./providers";

// Font
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Portfolio de Christian",
	description: "Portfolio personal de Christian Rodes Vidal",
	icons: {
		icon: "/favicon.ico",
	},
};

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale} className="scroll-smooth light">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
			</head>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						{children}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
