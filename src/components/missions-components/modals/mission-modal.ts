interface IImage {
  alt: string;
  src: string;
  src2x: string;
}
interface IVideo {
  alt: string;
  src: string;
}
export interface IItem {
  title: string;
  video?: IVideo;
  image?: IImage;
  cashReward: number;
  __typename: string;
}
export interface IMission {
  date: string;
  title: string;
  video?: IVideo;
  image?: IImage;
  cashReward: number;
  __typename: string;
}

export interface IFeesReponse {
  getFeed: IMissionResponse;
}
export interface IMissionResponse {
  items: Array<IMission>;
  hasNextPage: boolean;
}


export interface IMissionListProp {
  items: Array<IMission>;
  hasNext: boolean;
  onNextPageChange: () => void;
}

export interface IGroupedMission {
  date: string;
  items: Array<IItem>;
}
