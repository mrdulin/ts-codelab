/**
 * Created by dulin on 2017/7/6.
 */
class Component {
  get isBottom(): boolean {
    return true;
  }
  
  public render(): any {
    return this.isBottom;
  }
}

export default Component;
