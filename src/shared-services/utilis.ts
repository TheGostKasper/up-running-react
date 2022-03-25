import {
  IGroupedMission,
  IMission,
} from "../missions-components/modals/mission-modal";

export class Utilis {
  static getDateFormate(date: string): string {
    if (!!date) {
      const mappedDate = new Date(date)
        .toLocaleDateString("en-us", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
        .split(" ");

      return `${mappedDate[1].replace(",", "")} ${mappedDate[0]} ${
        mappedDate[2]
      }`;
    } else {
      return "";
    }
  }

  static groupItemsByDate = (
    items: Array<IMission>
  ): Array<IGroupedMission> => {
    const groupedItems: Array<IGroupedMission> = [];
    items.forEach((item: IMission) => {
      const { date, ...itemObj } = item;
      const itemGroupedIndx = groupedItems.findIndex(
        (g) => this.getDateFormate(g.date) === this.getDateFormate(date)
      );
      if (itemGroupedIndx >= 0) {
        groupedItems[itemGroupedIndx].items.push(itemObj);
      } else {
        groupedItems.push({
          date: this.getDateFormate(date),
          items: [itemObj],
        });
      }
    });
    return groupedItems;
  };

  static updateMetaTags(mission: IMission | undefined) {
    const changeMeta = (prop: string, value: string) => {
      document
        .querySelector(`meta[property="og:${prop}"]`)
        ?.setAttribute("content", value);
      document
        .querySelector(`meta[property="twitter:${prop}"]`)
        ?.setAttribute("content", value);
    };

    if (!!mission) {
      changeMeta("title", mission.title);
      changeMeta("image", mission.image?.src || "");
      changeMeta("video", mission.video?.src || "");
    }
  }
}
