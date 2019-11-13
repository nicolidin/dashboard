
export default class LatestSubRedditPostNamesWidgetConfig {
  componentName: string;
  id: string;
  subscriptionId: string;
  subRedditName: string;
  nbWantedPost: number;

  constructor(componentName: string, subRedditName: string, nbWantedPost: number, id: string) {
    this.componentName = componentName;
    this.subRedditName = subRedditName;
    this.nbWantedPost = nbWantedPost;
    this.id = id;
    this.subscriptionId = "aadahdlhd";
    //TODO change IDDD !
  }
}
