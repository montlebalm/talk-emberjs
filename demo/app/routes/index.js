import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sendMessage: function(user, text) {
      var msg = this.store.createRecord('message', {
        text: text,
        timestamp: new Date(),
        user: user
      });
      msg.save();
    }
  },
  model: function() {
    return this.store.find('message');
  },
  setupController: function(controller, model) {
    controller.set('messages', model);
    setInterval(this.refresh.bind(this), 500);
  }
});
