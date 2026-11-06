
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Locale } from "@/models/animal-category.model";
import {
  getSavedLanguage,
  saveLanguage,
} from "@/utils/storage";

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => Promise<void>;
  isLanguageLoading: boolean;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setCurrentLanguage] = useState<Locale>("FR");
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadLanguage = async () => {
      try {
        const savedLanguage = await getSavedLanguage();

        if (isMounted) {
          setCurrentLanguage(savedLanguage);
        }
      } catch (error) {
        console.error(
          "Erreur lors du chargement de la langue :",
          error
        );
      } finally {
        if (isMounted) {
          setIsLanguageLoading(false);
        }
      }
    };

    loadLanguage();

    return () => {
      isMounted = false;
    };
  }, []);

  const setLanguage = useCallback(
    async (newLanguage: Locale): Promise<void> => {
      await saveLanguage(newLanguage);
      setCurrentLanguage(newLanguage);
    },
    []
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isLanguageLoading,
      }}
    >
      {isLanguageLoading ? null : children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      "useLanguage doit être utilisé à l'intérieur de LanguageProvider."
    );
  }

  return context;
}
