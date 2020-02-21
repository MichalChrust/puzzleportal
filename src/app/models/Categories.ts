export class Categories {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _category: string;


  constructor(id: number, category: string) {
    this._id = id;
    this._category = category;
  }

  get id(): number {
    return this._id;
  }

  get category(): string {
    return this._category;
  }
}
