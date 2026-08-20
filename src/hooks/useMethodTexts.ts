import { useTranslation } from "react-i18next";

export function useMethodTexts() {
  const { t } = useTranslation();
  const rulesList = t("method.rules.list", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
  }[];
  const methodStepsList = t("method.treatment.steps", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    duration: string;
  }[];
  const materialsTexts = t("method.materials.items", {
    returnObjects: true,
  }) as { label: string; caption: string }[];
  const bioList = t("method.biography.info", {
    returnObjects: true,
  }) as {
    label: string;
    value: string;
  }[];

  return { rulesList, methodStepsList, materialsTexts, bioList };
}
