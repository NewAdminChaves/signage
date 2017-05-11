import { Template } from 'meteor/templating';

import { Matchups } from '../api/matchups.js';
import { RoundCounter } from '../api/roundCounter.js';

import { reactiveMoment } from 'meteor/panter:moment-reactive';

import './body.html';

Template.body.helpers({
  matchups1() {
    var roundQuery = RoundCounter.findOne();

    return Matchups.find( { $and: [ { round: roundQuery.round }, { col: "1" } ] } );
  },
  matchups2() {
    var roundQuery = RoundCounter.findOne();

    return Matchups.find( { $and: [ { round: roundQuery.round }, { col: "2" } ] } );
  },

  // matchups1() {
  //   return Matchups.find({ round: "1" });
  // },
  // matchups2() {
  //   return Matchups.find( { round: "2" } );
  // },
  // matchups1: [
  //   { "plt": "Justin", "dft": "Anthony", "crtrm": "1", "time": "12:30 PM", "round": "1", "col": "1" },
  //   { "plt": "CYH", "dft": "DDN", "crtrm": "2", "time": "12:30 PM", "round": "1", "col": "1" },
  //   { "plt": "EEG", "dft": "FLT", "crtrm": "3", "time": "12:30 PM", "round": "2", "col": "1" },
  //   { "plt": "HBV", "dft": "LQB", "crtrm": "4", "time": "12:30 PM", "round": "2", "col": "1" },
  // ],
  // matchups2: [
  //   { "plt": "MQJ", "dft": "NLQ", "crtrm": "5", "time": "12:30 PM", "round": "1", "col": "2" },
  //   { "plt": "OXN", "dft": "PRW", "crtrm": "6", "time": "12:30 PM", "round": "1", "col": "2" },
  //   { "plt": "UEM", "dft": "VEW", "crtrm": "7", "time": "12:30 PM", "round": "2", "col": "2" },
  //   { "plt": "WLS", "dft": "XBN", "crtrm": "8", "time": "12:30 PM", "round": "2", "col": "2" },
  // ],
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
  round() {
    var roundQuery = RoundCounter.findOne();

    return roundQuery.round;
  },
});
