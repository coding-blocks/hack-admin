import Component from '@glimmer/component';
import { later } from '@ember/runloop';

export default class WTabNavComponent extends Component {
  constructor() {
    super(...arguments)
    if (!this.args.activeTab) {
      later(() => {
        this.args.onTabChange(this.args.tabs.firstObject)
      })
    }
  }
}
