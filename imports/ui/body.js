import { Template } from 'meteor/templating';

import { Matchups } from '../api/matchups.js';

import './body.html';

Template.body.helpers({
  matchups() {
    return Matchups.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-matchup'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a matchup into the Collection
    Matchups.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
