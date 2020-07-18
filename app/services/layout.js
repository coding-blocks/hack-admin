import Service from '@ember/service';
import { action } from '@ember/object';

export default class LayoutService extends Service {
  bottomBarElement = null

  @action
  setBottomBarElement(element) {
    this.set('bottomBarElement', element)
  }
}
