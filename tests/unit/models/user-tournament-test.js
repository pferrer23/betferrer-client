import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user-tournament', 'Unit | Model | user tournament', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
