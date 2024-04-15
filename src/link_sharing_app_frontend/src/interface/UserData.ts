import { LinkType as Link } from "./LinkType";

export type UserData = {
  profile: {
    firstName: string;
    lastName: string;
    error: string;
    profilePic: any[];
  };
  links: Link[];
};
