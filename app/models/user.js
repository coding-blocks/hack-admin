import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr() name;
  @attr() email;
  @attr() verifiedemail;
  @attr() oauth_id;
  @attr() role_id;
  @attr() photo;
  @attr() bestRank;
  @attr() bestRankAcheivedOn;
}
