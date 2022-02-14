export class Quote {
  showAuthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public submitBy: string,
    public postDate: Date,
    public upVote: number,
    public downVote: number
  ) {
    this.showAuthor = false;
  }
}
