import { AppShell, AppShellHeader, AppShellMain, Group } from "@mantine/core";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import SignIn from "@/components/sign-in";

export default async function Home() {
  const t = await getTranslations("Landing");

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md justify-between max-w-7xl mx-auto">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <SignIn />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <h1 className="text-center mt-20 text-4xl font-bold">
          {t.rich("title", {
            g1: (chunks) => (
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                {chunks}
              </span>
            ),
            g2: (chunks) => (
              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl text-lg">
          {t("description")}
        </p>

        <div className="flex justify-center mt-10">
          <ColorSchemesSwitcher />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
