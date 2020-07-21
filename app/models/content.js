import Model, { attr } from '@ember-data/model';

export default class ContentModel extends Model {
  @attr() name;
  @attr() type;
  @attr() difficulty;
}
