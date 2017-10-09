app
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '毕诚',
    lastText: 'You on your way?',
    face: 'http://www.angularui.cn/bbs/uploads/avatar/2/02/2_big.png'
  }, {
    id: 1,
    name: '毕诚',
    lastText: 'Hey, it\'s me',
    face: 'http://www.angularui.cn/bbs/uploads/avatar/2/02/2_big.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
