import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ContestContestEditorPermissionEditorComponent extends Component {
  showRegistrationForm = false
  @tracked limitedAttempt = false

  constructor() {
    super(...arguments);
    this.limitedAttempt = this.args.contest.max_attempts || this.args.contest.duration;
  }
}
