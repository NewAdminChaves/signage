import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const RoundCounter = new Mongo.Collection('roundCounter');

Meteor.methods({
  'roundCounter.check'() {
    return RoundCounter.find( { _id: "1" } );
  },
});
