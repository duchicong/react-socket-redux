import { StatusEnum } from "constants/enum";
import { IError } from "constants/types/common";

export interface IUser {
  nickname: string;
  status: StatusEnum;
  urlImage: string;
}

export interface IInitialState {
  users: IUser[];
  loading: boolean;
  error: IError | undefined;
}
