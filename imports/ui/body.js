import { Template } from 'meteor/templating';

import { Matchups } from '../api/matchups.js';
import { RoundCounter } from '../api/roundCounter.js';

import { reactiveMoment } from 'meteor/panter:moment-reactive';

import './body.html';

// var countcountcount = "2";
//
// var count = RoundCounter.find();
// console.log(count);
//
// console.log("Round Count: ");
// console.log(Meteor.call('roundCounter.check'));


// console.log(RoundCounter.find());
//console.log(Matchups.find( { $and: [ { round: countcountcount }, { col: "1" } ] } ));
// var roundQuery = RoundCounter.find( { _id: 1 } );

// var roundQuery = Matchups.find( { $and: [ { round: countcountcount }, { col: "1" } ] } );

// console.log("Round Query: ");
// console.log(roundQuery);
//
// var roundCount = roundQuery.round;

Template.body.helpers({
  matchups1() {

    // let whatever = Matchups.find( { _id: "1" } );
    // console.log(whatever);
    // var roundQuery = Matchups.find( { roundCount: "1" } );
    // console.log(roundQuery);
    // var roundQuery = RoundCounter.find();
    // console.log(roundQuery);

    var roundQuery = RoundCounter.findOne();
    // console.log(roundQuery.round);
    // var roundQuery = Matchups.find( { $and: [ { round: countcountcount }, { col: "1" } ] } );
    // var roundQuery = Matchups.find( { $and: [ { round: countcountcount }, { col: "1" } ] } ).round;

    // console.log("Round Query: ");
    // console.log(roundQuery);

    // return Matchups.find( { $and: [ { round: countcountcount }, { col: "1" } ] } );
    // return Matchups.aggregate([
      // { "$unwind": "$"}
    // ]);

    // let whatever = RoundCounter.findOne( { _id: 1 }, { _id: 0, round: 1 } ).round;

    // console.log(whatever);

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
  round: 1,
});
