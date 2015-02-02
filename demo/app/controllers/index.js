import Ember from 'ember';

export default Ember.Controller.extend({
  messages: [],
  messagesSorted: Ember.computed.sort('messages', 'sortFields'),
  sortFields: ['timestamp']
});
