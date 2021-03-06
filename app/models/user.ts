import { Photo } from "./photo";

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public password: string;
  public create: Date;
  public photoList: Photo[];
  public likedPhotoList: Photo[];
}