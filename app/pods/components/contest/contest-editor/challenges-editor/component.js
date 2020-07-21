import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { restartableTask, dropTask } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';

export default class ContestContestEditorChallengesEditorComponent extends Component {
  @service store;
  @service api;

  @alias('fetchChallengesTask.lastSuccessful.value') challenges;

  @tracked selectedChallenge = null;

  constructor() {
    super(...arguments);
    this.fetchChallengesTask.perform();
  }

  @restartableTask fetchChallengesTask = function *(query = '') {
    yield timeout(500);
    return this.store.query('content', {
      include: 'problem,quiz,project',
      filter: {
        name: {
          $iLike: `%${query}%`
        }
      }
    })
  }
  @dropTask saveContents = function *() {
    yield this.api.request(`contests/${this.args.contest.id}/contents`, {
      method: 'POST',
      body: {
        contentIds: [
          ...this.args.contest.contents.mapBy('id'),
          this.selectedChallenge.id
        ]
      }
    })
    this.selectedChallenge = null;
    this.args.contest.hasMany('contents').reload();
  }
}
