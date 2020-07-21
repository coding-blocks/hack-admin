import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contest/contest-editor/advanced-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Contest::ContestEditor::AdvancedEditor />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Contest::ContestEditor::AdvancedEditor>
        template block text
      </Contest::ContestEditor::AdvancedEditor>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
