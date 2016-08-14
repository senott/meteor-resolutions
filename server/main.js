import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addResolution: function(title){
    Resolutions.insert({
      title: title,
      createdAt: new Date()
    });
  }
});
