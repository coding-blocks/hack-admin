import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ContestContestBottomBarComponent extends Component {
  @action
  saveContest() {
    return this.args.contest.save()
  }
}
