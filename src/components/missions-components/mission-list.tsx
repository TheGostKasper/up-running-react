import { useEffect, useState } from "react";
import {
  IGroupedMission,
  IItem,
  IMissionListProp,
} from "./modals/mission-modal";
import fb from "../icons/fb.svg";
import ig from "../icons/ig.svg";
import gift from "../icons/gift.svg";
import UseScrollLoader from "../shared-components/scroll-loader";
import { useLangContext } from "../shared-components/lang-context";
import { Utilis } from "../shared-services/utilis";

const missionType = {
  facebookMission: "FBPostMission",
  igMission: "IGStoryMission",
};

const MissionList = ({
  items,
  hasNext,
  onNextPageChange,
}: IMissionListProp) => {
  const translateObj = useLangContext();

  const [feed, setFeed] = useState<Array<IGroupedMission>>([]);

  const lastElementRef = UseScrollLoader({ hasNext, onNextPageChange });

  useEffect(() => {
    if (!!items && items.length > 0) {
      setFeed((prevFeed) => [
        ...prevFeed,
        ...Utilis.groupItemsByDate([...items]),
      ]);
    }
    Utilis.updateMetaTags(items.at(-1));
  }, [items]);

  return (
    <div className="mx-card">
      {!!feed.length &&
        feed.map((gMission: IGroupedMission, indx) => (
          <div key={indx} className="mt-4">
            <h4 className="mt-5 mb-4 mission-date">
              {translateObj.translate(gMission.date, [1])}
            </h4>

            {gMission.items.map((mission: IItem, i) => (
              <div key={i} className="mission" ref={lastElementRef}>
                {!!mission.image && (
                  <img
                    src={mission.image?.src}
                    alt={mission.image?.alt || ""}
                    className="media"
                  />
                )}
                {!!mission.video && (
                  <video src={mission.video?.src} className="media" controls />
                )}
                <div className="btn btn-cash">
                  <small>{translateObj["CSH"]}</small>

                  {mission.__typename === missionType.facebookMission ? (
                    <img src={fb} alt="facebook" className="icon" />
                  ) : (
                    <img src={ig} alt="IG" className="icon" />
                  )}
                </div>

                <div className="p-2">
                  <h4 className="pb-2">{mission.title}</h4>
                  <div className="btn btn-reward ">
                    <img src={gift} alt="gift" className="icon" />
                    <small className="bold-reward">{translateObj["RWD"]}</small>
                    ${mission.cashReward}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

      {!hasNext && !!items.length && (
        <p className="text-center alert alert-light text-center w-100">
          {translateObj["NDM"]}
        </p>
      )}
    </div>
  );
};

export default MissionList;
