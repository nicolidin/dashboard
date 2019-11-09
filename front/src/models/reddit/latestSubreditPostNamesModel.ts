
export default class RedditLatestSubreditPostNames {
  subRedditName: string;
  nbWantedPost: number;

  constructor(subRedditName: string, nbWantedPost: number) {
    this.subRedditName = subRedditName;
    this.nbWantedPost = nbWantedPost
  }
}
