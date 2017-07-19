var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Hikaru',
    text: 'Hey there'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
