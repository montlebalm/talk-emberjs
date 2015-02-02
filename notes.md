# Notes

## Project Structure

* Bower, NPM
* Config
  * Feature flags, app settings
* App folders
* Check out "index" template
  * "message-list" and "message-composer" components
* Start the dev server
  * `ember serve`

## Add Model

* Create "message" model
  * `ember g model message`
* Add properties and fixture data

  ```
  var Message = DS.Model.extend({
    user: DS.attr('string'),
    text: DS.attr('string'),
    timestamp: DS.attr('date')
  });

  Message.reopenClass({
    FIXTURES: [
      { id: 1, user: 'Duncan Malloy', text: 'Garrulous? What the fuck is garrulous?', timestamp: moment().subtract(4, 'minutes').format() },
      { id: 2, user: 'Duncan Malloy', text: 'What\'s with Dictionary Boy?', timestamp: moment().subtract(2, 'minutes').format() },
      { id: 3, user: 'Vince Larkin', text: '"Thesaurus Boy", I think, is more appropriate.', timestamp: moment().subtract(1, 'minutes').format() },
      { id: 4, user: 'Vince Larkin', text: 'That would be loquacious, verbose, effusive. How about "chatty"?', timestamp: moment().subtract(3, 'minutes').format() },
      { id: 5, user: 'Vince Larkin', text: 'We pick up Mr. Cindino in Carson City. From then until the plane hits Alabama, we\'ve got two hours to get him to talk. We got you a seat right next to him, and he\'s known to be somewhat garrulous in the company of thieves.', timestamp: moment().subtract(5, 'minutes').format() }
    ]
  });

  export default Message;
  ```

* Hah! Made you look
* Is it going ok? It's not is it?

## Add Route

* Create "index" route
  * `ember g route index`
* Retrieve "message" models and pass to controller

  ```
  model: function() {
    return this.store.find('message');
  },
  setupController: function(controller, model) {
    controller.set('messages', model);
  }
  ```

* Page displays messages from fixture data 
* Oh oh! Wrong order. We need to sort the messages

## Add Controller

* Create "index" controller
  * `ember g controller index`
* Add "messages" property and "messagesSorted"

  ```
  messages: [],
  messagesSorted: Ember.computed.sort('messages', 'sortFields'),
  sortFields: ['timestamp:asc']
  ```

* Update "message-list" component with "messagesSorted"
* Can't add messages, need to fix "message-composer" component
* This is where everything goes off the rails

## Message Composer

* Add "sendMessage" action to route

  ```
  sendMessage: function(user, text) {
    console.log(user, 'says', text);
  }
  ```

* Save the message to the backend

  ```
  var msg = this.store.createRecord('message', {
    text: text,
    timestamp: new Date(),
    user: user
  });
  msg.save();
  ```

## Local storage

* Replace "FixtureAdapter" with "LSAdapter"

## Real-time updates

* Add polling to "index" route 
  * `setInterval(this.refresh.bind(this), 500);`
* Show "real-time" updates

## Hold for applause

* Soak it in. You earned it
