import { createContext, useState, useEffect, useContext } from "react";
import { Translate } from "../../shared-services/translate";


const LangContext = createContext<any>(Translate.resources["en"]);

const LangContextProvider = ({ children, lang }: any) => {
  const [translateObj, setTranslateObj] = useState(Translate.resources[lang]);

  useEffect(() => {
    setTranslateObj(Translate.resources[lang]);
  }, [lang]);

  return (
    <LangContext.Provider value={translateObj}>{children}</LangContext.Provider>
  );
};

const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLangContext was used outside of its Provider");
  }
  return context;
};

export { useLangContext, LangContextProvider };
