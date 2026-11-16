import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Frontend 101",
  description: "Roadmap для подготовки к frontend-собеседованиям",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Theme
          appearance="light"
          accentColor="indigo"
          grayColor="slate"
          radius="large"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
