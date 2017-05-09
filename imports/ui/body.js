import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import { Matchups } from '../api/matchups.js';

import { reactiveMoment } from 'meteor/panter:moment-reactive';

import './body.html';

// Template.body.onCreated(function bodyOnCreated() {
//   var timestamp = new ReactiveDict();
//
// })

Template.body.helpers({
  // matchups() {
  //   return Matchups.find({}, { sort: { createdAt: -1 } });
  // },
  matchups: [
    { plt: 'A', dft: 'B', crtrm: '1', time: '12:30 PM' },
    { plt: 'C', dft: 'D', crtrm: '2', time: '12:30 PM' },
    { plt: 'E', dft: 'F', crtrm: '3', time: '12:30 PM' },
    { plt: 'G', dft: 'H', crtrm: '4', time: '12:30 PM' },
    { plt: 'I', dft: 'J', crtrm: '5', time: '12:30 PM' },
    { plt: 'K', dft: 'L', crtrm: '6', time: '12:30 PM' },
    { plt: 'M', dft: 'N', crtrm: '7', time: '12:30 PM' },
    { plt: 'O', dft: 'P', crtrm: '8', time: '12:30 PM' },
    { plt: 'Q', dft: 'R', crtrm: '9', time: '12:30 PM' },
    { plt: 'S', dft: 'T', crtrm: '10', time: '12:30 PM' },
    { plt: 'U', dft: 'V', crtrm: '11', time: '12:30 PM' },
    { plt: 'W', dft: 'X', crtrm: '12', time: '12:30 PM' },
  ],
  date: function() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = new Date();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();
    let fullDate = day + ", " + month + " " + date + ", " + year;
    return fullDate;
  },
  time() {
    return momentReactive()
  },
  round: 1,
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
