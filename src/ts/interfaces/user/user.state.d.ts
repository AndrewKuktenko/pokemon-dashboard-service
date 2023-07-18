import { ITokenPayload } from "./token.payload";
import { IUser } from "./user";

export interface IUserState {
  tokenPayload: ITokenPayload | null;
  userData: IUser | null;
}
