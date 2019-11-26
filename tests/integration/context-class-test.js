import { helper } from '@ember/component/helper';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import setupStyles from '../helpers/render-with-styles';

module('Integration | context-class attribute', function(hooks) {
  setupRenderingTest(hooks);

  test('it replaces the classes using the styles defined in the same context', async function(assert) {
    let hbs = setupStyles({ foo: '--foo-value' });
    this.owner.register('template:components/test-component', hbs`<p context-class="foo"></p>`);

    await render(hbs`
      {{test-component}}
    `);
    const element = this.element.querySelector('p');

    assert.ok(element.classList.contains('--foo-value'));
  });
});
