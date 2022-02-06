export class Quote {
  showAuthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
     public submitBy: string,
    public postDate: Date
  ) {
    this.showAuthor = false;
  }
}
