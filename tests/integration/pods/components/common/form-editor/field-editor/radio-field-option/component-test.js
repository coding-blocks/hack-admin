import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | common/form-editor/field-editor/radio-field-option', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Common::FormEditor::FieldEditor::RadioFieldOption />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Common::FormEditor::FieldEditor::RadioFieldOption>
        template block text
      </Common::FormEditor::FieldEditor::RadioFieldOption>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
