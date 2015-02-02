/* global moment */

import Ember from 'ember';

export function dateFormat(date, format) {
  return moment(date).format(format);
}

export default Ember.Handlebars.makeBoundHelper(dateFormat);
