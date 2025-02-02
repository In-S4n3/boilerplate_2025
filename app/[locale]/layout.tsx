import { locales } from "@/libs/i18n/routing";

import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { breakpoints, colors } from "@/libs/theme/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    breakpoints,
    colors,
  }),
);

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>
            <Notifications />
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
