import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';
import { isNone } from '@ember/utils';

const HackAdminApplicationRoute = Route.extend(ApplicationRouteMixin)
export default class ApplicationRoute extends HackAdminApplicationRoute {
  @service session;
  @service currentUser;

  queryParams = {
    code: {
      refreshModel: true
    }
  }

  async beforeModel (transition) {
    if (!isNone(transition.to.queryParams.code)) {
      if (this.get('session.isAuthenticated')) {
        return this.transitionTo('index', { queryParams: { code: undefined } })
      }
      // we have ?code qp
      const { code } = transition.to.queryParams

      await (
        this.session
          .authenticate('authenticator:jwt', { code, admin: true })
          .then(() => this.currentUser.load())
      )
      return this.transitionTo('index', { queryParams: { code: undefined } })
    }
  }
}
