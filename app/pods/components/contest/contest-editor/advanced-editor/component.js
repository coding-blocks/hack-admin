import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ContestContestEditorAdvancedEditorComponent extends Component {
  @action
  toggleLanguage(lang) {
    const contest = this.args.contest
    if (contest.allowed_languages.includes(lang)) {
      contest.allowed_languages.removeObject(lang)
    } else {
      contest.allowed_languages.pushObject(lang)
    }
  }
}
