import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormFileInputComponent extends Component {
  showPreview = false;
  
  @action 
  onAfterSign(e) {
    this.args.onUpdate(e.url)
  }
}
