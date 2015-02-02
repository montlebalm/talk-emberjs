import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function(user, text) {
      this.sendAction('action', user, text);
      this.reset();
    }
  },
  reset: function() {
    this.set('text', '');
  },
  text: '',
  user: ''
});
