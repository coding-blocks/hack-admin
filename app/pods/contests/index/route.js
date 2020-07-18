import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ContestsIndexRoute extends Route {
  @service store;

  queryParams = {
    q: {
      refreshModel: true
    }
  }
  q = ''

  model() {
    return hash({
      contests: this.store.query('contest', {
        filter: {
          name: {
            $iLike: `%${this.q}%`
          }
        }
      })
    })
  }

  setupController(controller, model) {
    controller.set('contests', model.contests)
  }
}
