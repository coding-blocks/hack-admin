import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CommonFormEditorFieldEditorCheckboxFieldComponent extends Component {
  @action
  deleteOption(obj) {
    this.args.field.options.removeObject(obj)
  }

  @action
  addOption() {
    this.args.field.options.pushObject({
      name: "My Option",
      value: 1
    })
  }
}
