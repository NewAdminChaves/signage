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
    { plt: 'chris', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'abc', dft: 'jkl', crtrm: '1', time: '12:30 PM' },
    { plt: 'def', dft: 'mno', crtrm: '2', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
    { plt: 'ghi', dft: 'pqr', crtrm: '3', time: '12:30 PM' },
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
