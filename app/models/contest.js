import Model, { attr, hasMany } from '@ember-data/model';
import { computed, set } from '@ember/object';

export default class ContestModel extends Model {
  @attr() name;
  @attr() description;
  @attr() image;
  @attr() icon;
  @attr() locked_contest;
  @attr() start_time;
  @attr() end_time;
  @attr() duration;
  @attr() max_attempts;
  @attr() slot_size;
  @attr() plagiarism_filtering;
  @attr({ defaultValue: {
    "is-verification-required": true, 
    "show-leaderboard": true,
    "use-new-judge": false
  }}) control_flags;
  @attr() allowed_languages;
  @attr() contest_type;
  @attr() badge_icon;
  @attr() badge_theme;
  @attr({ defaultValue: {fields: []} }) registration_form;
  @attr() accept_registrations;
  @attr() allow_testcase_editorial_unlock;
  @attr() created_by;
  @attr() reviewedById;
  @attr() publishedById;

  @hasMany('contents') contents;

  updateAllowedLanguage(lang, value) {
    if (value) {
      this.allowed_languages.removeObject(lang)
    } else {
      this.allowed_languages.pushObject(lang)
    }
  }

  @computed('allowed_languages.@each')
  get allowed_language_c() {
    return this.allowed_languages.includes('c')
  }

  @computed('allowed_languages.@each')
  get allowed_language_cpp() {
    return this.allowed_languages.includes('cpp')
  }

  @computed('allowed_languages.@each')
  get allowed_language_java() {
    return this.allowed_languages.includes('java')
  }

  @computed('allowed_languages.@each')
  get allowed_language_py2() {
    return this.allowed_languages.includes('py2')
  }

  @computed('allowed_languages.@each')
  get allowed_language_py3() {
    return this.allowed_languages.includes('py3')
  }

  @computed('allowed_languages.@each')
  get allowed_language_js() {
    return this.allowed_languages.includes('js')
  }

  @computed('allowed_languages.@each')
  get allowed_language_csharp() {
    return this.allowed_languages.includes('csharp')
  }
}
