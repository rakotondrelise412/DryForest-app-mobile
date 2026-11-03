
import { useState } from "react";

import type { Locale } from "@/models/animal-category.model";

export function useLanguage() {
  const [language, setLanguage] = useState<Locale>("FR");

  return {
    language,
    setLanguage,
  };
}
