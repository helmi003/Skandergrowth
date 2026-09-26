import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <Container className="flex flex-col items-center gap-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-[var(--color-ink)]">{t("title")}</h1>
      <p className="text-[var(--color-ink-soft)]">{t("description")}</p>
      <Link href="/" className={buttonVariants({})}>
        {t("cta")}
      </Link>
    </Container>
  );
}
