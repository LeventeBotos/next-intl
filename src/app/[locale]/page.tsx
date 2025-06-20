import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col items-center gap-10 text-xl justify-center min-h-screen p-4">
      <h1 className="font-bold">{t("title")}</h1>
      <Link href="/about">{t("description")}</Link>
    </div>
  );
}
