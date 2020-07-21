import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from 'hack-admin/config/environment';
import fetch from 'fetch';

export default class ApiService extends Service {
  @service session;

  host = ENV.apiHost;
  namespace = ENV.namespace;

  @computed('session.data.authenticated.jwt')
  get headers() {
    const jwt = this.get('session.data.authenticated.jwt');
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(jwt ? {
        Authorization: `JWT ${jwt}`
      } : {})
    }
  }

  request(path, opts = {}) {
    const url = this.host + '/' + this.namespace + '/' + path
    return fetch(url, {
      ...opts,
      body: JSON.stringify(opts.body),
      headers: this.headers,
      json: true
    })
  }
}
