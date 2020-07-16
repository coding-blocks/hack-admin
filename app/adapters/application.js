import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'hack-admin/config/environment';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session

  host = ENV.apiHost
  namespace = ENV.namespace

  @computed('session.data.authenitcated')
  get headers() {
    const { jwt } = this.get('session.data.authenticated');
    return {
      ...(isPresent(jwt) ? {
        Authorization: `JWT ${jwt}`
      } : {})
    }
  }

}
