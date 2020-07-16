import Model, { attr } from '@ember-data/model';

export default class ContestModel extends Model {
  @attr() name;
  @attr() description;
}