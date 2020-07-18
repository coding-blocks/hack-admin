import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ContestsIdRoute extends Route {
  @service store

  model(params) {
    return hash({
      contest: this.store.findRecord('contest', params.id)
    })
  }

  setupController(controller, model) {
    controller.set('contest', model.contest)
  }
}
