export interface IName {
  title: string;
  first: string;
  last: string;
}
interface ILocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface IUser {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;

  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: IPicture;
}
