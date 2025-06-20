import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "Home" });

  return (
    <div className="flex flex-col items-center gap-10 text-xl justify-center min-h-screen p-4">
      <h1 className="font-bold">{t("title")}</h1>
      <p>Valami</p>
    </div>
  );
}

export const dynamic = "error";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
