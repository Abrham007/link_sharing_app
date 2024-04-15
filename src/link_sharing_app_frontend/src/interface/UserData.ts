import { Principal } from "@dfinity/principal";
import { LinkType as Link } from "./LinkType";

export type UserData = {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    profilePic: Uint8Array | number[];
  };
  links: Link[];
};
