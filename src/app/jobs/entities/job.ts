export class Job {
  constructor(private _id: number, private _companyName: string, private _title: string,
              private _companyLogo: string, private _reference: string) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get companyLogo(): string {
    return this._companyLogo;
  }

  set companyLogo(value: string) {
    this._companyLogo = value;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }
}
