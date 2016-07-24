Resolutions = new Mongo.Collection("resolutions");

Resolutions.allow({ 
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
