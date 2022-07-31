import { useState } from "react";
import LoadingError from "../shared-components/loading-error";
import { IFeesReponse } from "./modals/mission-modal";
import MissionList from "./mission-list";
import { GQLQueries } from "../../shared-services/gqlQueries";
import { LangContextProvider } from "../shared-components/lang-context";

const Missions: React.FC<any> = () => {
  const [lang, setLang] = useState("en");
  const switchLang = (lng: string) => {
    if (lng !== lang) {
      setLang(lng);
    }
  };

  const [variable, setVariable] = useState({ limit: 4, offset: 1 });

  const onPageChange = () => {
    setVariable((prev) => {
      return { limit: prev.limit, offset: prev.offset + 1 };
    });
  };
  return (
    <LangContextProvider lang={lang}>
        <div className="">
          <button
            className={`btn ${lang === "en" ? "active" : "default"}`}
            onClick={() => switchLang("en")}
          >
            English
          </button>
          <button
            className={`btn ml-4 ${lang === "es" ? "active" : "default"}`}
            onClick={() => switchLang("es")}
          >
            Spanish
          </button>
        </div>
      <LoadingError query={GQLQueries.GET_FEED} variables={variable}>
        {({ value }: { value: IFeesReponse }) => (
          <MissionList
            items={value?.getFeed?.items || []}
            hasNext={value?.getFeed?.hasNextPage}
            onNextPageChange={onPageChange}
          />
        )}
      </LoadingError>
    </LangContextProvider>
  );
};

export default Missions;
