import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from 'hack-admin/config/environment';
import fetch from 'fetch';

export default class ApiService extends Service {
  @service session

  host = ENV.apiHost

  @computed('session.data.authenticated.jwt')
  get headers() {
    const jwt = this.get('session.data.authenticated.jwt');
    return {
      ...(jwt ? {
        Authorization: `JWT ${jwt}`
      } : {})
    }
  }

  request(url, opts = {}) {
    return fetch(url, {
      ...opts,
      headers: this.headers,
      json: true
    })
  }
}
