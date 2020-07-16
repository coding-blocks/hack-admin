import Route from '@ember/routing/route';
import ENV from 'hack-admin/config/environment';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session

  loginUrl = `${ENV.oneauthURL}/oauth/authorize?response_type=code&client_id=${ENV.clientId}&redirect_uri=${ENV.publicUrl}`; 

  afterModel() {
    if(this.session.isAuthenticated){
      this.transitionTo('index')
    } else {
      window.location.href = this.loginUrl
    }
  }
}
