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
		icon: "/img/global/logo 1.webp",
		apple: "/img/global/logo 1.webp",
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
				<link rel="icon" type="image/webp" href="/img/global/logo 1.webp" />
				<link rel="apple-touch-icon" href="/img/global/logo 1.webp" />
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
