import { useState } from "react";
import LoadingError from "../shared-components/loading-error";
import { GQLQueries } from "../shared-services/gqlQueries";
import { IFeesReponse } from "./modals/mission-modal";
import MissionList from "./mission-list";

const Missions: React.FC<any> = () => {
  const [variable, setVariable] = useState({ limit: 4, offset: 1 });

  const onPageChange = () => {
    setVariable((prev) => {
      return { limit: prev.limit, offset: prev.offset + 1 };
    });
  };
  return (
    <LoadingError query={GQLQueries.GET_FEED} variables={variable}>
      {({ value }: { value: IFeesReponse }) => (
        <MissionList
          items={value?.getFeed?.items || []}
          hasNext={value?.getFeed?.hasNextPage}
          onNextPageChange={onPageChange}
        />
      )}
    </LoadingError>
  );
};

export default Missions;
