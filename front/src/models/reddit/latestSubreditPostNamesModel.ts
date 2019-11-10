
export default class LatestSubRedditPostNamesWidgetConfig {
  componentName: string;
  subRedditName: string;
  nbWantedPost: number;

  constructor(componentName: string, subRedditName: string, nbWantedPost: number) {
    this.componentName = componentName;
    this.subRedditName = subRedditName;
    this.nbWantedPost = nbWantedPost
  }
}
