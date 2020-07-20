import Component from '@ember/component';
import { action } from '@ember/object';

export default class ContestContestEditorRegistrationFormEditorComponent extends Component {
  selectedField = null
  availableFields = [
    { name: "Text Input", value: "text" },
    { name: "Radio Input", value: "radio" },
    { name: "Checkbox Input", value: "checkbox" }
  ]

  didReceiveAttrs() {
    this.set('selectedField', this.availableFields.firstObject.value)
  }

  @action
  deleteField(field) {
    this.form.fields.removeObject(field)
  }

  @action
  addField() {
    // push the field to form
    switch(this.selectedField) {
      case 'text': 
        this.form.fields.pushObject({
          title: 'My Text Field',
          type: this.selectedField,
          required: false,
          name: 'text_field'
        })
        break
      case 'checkbox':
        this.form.fields.pushObject({
          title: 'My Checkboxes',
          type: this.selectedField,
          required: false,
          name: 'checkbox_field',
          options: Ember.A([
            {
              name: 'option 1',
              value: 1
            }
          ])
        })
        break
      case 'radio':
        this.form.fields.pushObject({
          title: 'My Radio Button',
          type: this.selectedField,
          required: false,
          name: 'radio_button',
          options: Ember.A([
            {
              name: 'option 1',
              value: 1
            }
          ])
        })
        break
    }
    this.set('selectedField', this.availableFields.firstObject.value)
  }
}
