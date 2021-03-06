Meteor.methods({
  saveMailChimpConfiguration: function (apikey) {
    var user = Meteor.user();
    if (!user) return;
    try{
      MailChimpManager.saveConfiguration(apikey, user.currentHierId);
    }catch (e){
      throw new Meteor.Error(e.message);
    }
  },
  getMailChimpLists: function (searchString) {
    var user = Meteor.user();
    if (!user) return;
    return MailChimpManager.getLists(user.currentHierId, searchString);
  },
  getSubscribers:function (listId) {
    var user = Meteor.user();
    if (!user) return;
    return  MailChimpManager.getSubscribers(user.currentHierId, listId);
  },
  importFromMailchimp:function (listId, hotListId) {
    var user = Meteor.user();
    if (!user) return;
    return  MailChimpManager.importContacts(user.currentHierId, listId, hotListId);
  },
  exportToMailchimp:function (listId, hotListId) {
    var user = Meteor.user();
    if (!user) return;
    return  MailChimpManager.exportContacts(user.currentHierId, listId, hotListId);
  }
});

