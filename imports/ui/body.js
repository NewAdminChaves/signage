import { Template } from 'meteor/templating';

import { Matchups } from '../api/matchups.js';

import { reactiveMoment } from 'meteor/panter:moment-reactive';

import './body.html';

Template.body.helpers({
  // matchups1() {
  //   return Matchups.find({});
  // },
  // matchups2() {
  //   return Matchups.find( { round: "3" } );
  // },
  matchups1: [
    { "plt": "EJG", "dft": "VNG", "crtrm": "1", "time": "12:30 PM" },
    { "plt": "CYH", "dft": "DDN", "crtrm": "2", "time": "12:30 PM" },
    { "plt": "EEG", "dft": "FLT", "crtrm": "3", "time": "12:30 PM" },
    { "plt": "HBV", "dft": "LQB", "crtrm": "4", "time": "12:30 PM" },
    { "plt": "IVM", "dft": "JPQ", "crtrm": "5", "time": "12:30 PM" },
    { "plt": "KPO", "dft": "LBC", "crtrm": "6", "time": "12:30 PM" },
  ],
  matchups2: [
    { "plt": "MQJ", "dft": "NLQ", "crtrm": "7", "time": "12:30 PM" },
    { "plt": "OXN", "dft": "PRW", "crtrm": "8", "time": "12:30 PM" },
    { "plt": "QOV", "dft": "RVC", "crtrm": "9", "time": "12:30 PM" },
    { "plt": "SBN", "dft": "TPA", "crtrm": "10", "time": "12:30 PM" },
    { "plt": "UEM", "dft": "VEW", "crtrm": "11", "time": "1:30 PM", "round": "3" },
    { "plt": "WLS", "dft": "XBN", "crtrm": "12", "time": "1:30 PM", "round": "3" },
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
