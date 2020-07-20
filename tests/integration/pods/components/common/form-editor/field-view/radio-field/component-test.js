import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | common/form-editor/field-view/radio-field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Common::FormEditor::FieldView::RadioField />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Common::FormEditor::FieldView::RadioField>
        template block text
      </Common::FormEditor::FieldView::RadioField>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
