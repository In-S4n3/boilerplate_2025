"use client";

import {
  useMantineColorScheme,
  Button,
  Group,
  MantineColorScheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useTranslations } from "next-intl";

export function ColorSchemesSwitcher() {
  const t = useTranslations("Landing");
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const schemeColors = ["light", "dark", "auto"];

  const handleSetColorScheme = (scheme: MantineColorScheme) => {
    setColorScheme(scheme);
    notifications.show({
      title: t("color-schemes.color-scheme-title"),
      message: t("color-schemes.color-scheme-changed", { scheme }),
      withBorder: true,
    });
  };

  return (
    <Group>
      {schemeColors.map((scheme) => (
        <Button
          key={scheme}
          onClick={() => handleSetColorScheme(scheme as MantineColorScheme)}
        >
          {t(`color-schemes.${scheme}`)}
        </Button>
      ))}
      <Button onClick={clearColorScheme}>{t("color-schemes.clear")}</Button>
    </Group>
  );
}
