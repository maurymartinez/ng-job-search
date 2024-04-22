import {Job} from "./job";

export class JobDetails extends Job {

  constructor(id: number, companyName: string, title: string, companyLogo: string, reference: string, favorite: boolean,
              private _location: string, private _industries: string[],
              private _types: string[], private _description: string, private _publishDate: string) {
    super(id, companyName, title, companyLogo, reference, favorite);
  }


  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get industries(): string[] {
    return this._industries;
  }

  set industries(value: string[]) {
    this._industries = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get publishDate(): string {
    return this._publishDate;
  }

  set publishDate(value: string) {
    this._publishDate = value;
  }
}
