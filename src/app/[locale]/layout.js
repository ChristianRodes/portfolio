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
	title: "Christian Rodes — Digital Builder",
	description: "Junior Product Manager & Digital Builder. I analyse data, build products and optimise processes.",
	icons: {
		icon: "/img/global/logo 1.webp",
		apple: "/img/global/logo 1.webp",
	},
	openGraph: {
		title: "Christian Rodes — Digital Builder",
		description: "Junior Product Manager & Digital Builder. I analyse data, build products and optimise processes.",
		images: [{ url: "/og.png", width: 1200, height: 630 }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Christian Rodes — Digital Builder",
		description: "Junior Product Manager & Digital Builder. I analyse data, build products and optimise processes.",
		images: ["/og.png"],
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
