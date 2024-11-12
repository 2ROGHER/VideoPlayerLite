import { Author } from './author.model';
import { Gender } from './gender.model';

// TODO: implement a specialized pattern to define models here.
// figure out wich pattern is better.
export class Video {
  public id: string;
  public title: string;
  public gender: Gender;
  public media: string;
  public url: string;
  public picture: string;
  public author: Author;
  public description: string;
  public time: number;

  constructor(
    id: string,
    title: string,
    gender: Gender,
    media: string,
    url: string,
    picture: string,
    author: Author,
    description: string,
    time: number
  ) {
    this.id = id;
    this.title = title;
    this.gender = gender;
    this.media = media;
    this.url = url;
    this.picture = picture;
    this.author = author;
    this.description = description;
    this.time = time;
  }
}
