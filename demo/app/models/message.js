import DS from 'ember-data';

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
