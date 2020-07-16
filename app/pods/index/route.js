import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store

  async model() {
    try {
      const contests = this.store.findAll('contest')
    } catch (err) {
      console.log(err)
    }
  }
}
