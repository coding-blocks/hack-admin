import Model, { attr } from '@ember-data/model';

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
  @attr() control_flags;
  @attr() allowed_languages;
  @attr() contest_type;
  @attr() badge_icon;
  @attr() badge_theme;
  @attr() registration_form;
  @attr() accept_registrations;
  @attr() allow_testcase_editorial_unlock;
  @attr() created_by;
  @attr() reviewedById;
  @attr() publishedById;
}