const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Hikaru',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Hide',
        room: 'Node Course'
      },
      {
        id: '3',
        name: 'Akira',
        room: 'React Course'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123213',
      name: 'Hikaru',
      room: 'Hell yeah'
    };

    var result = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var result = users.removeUser('1');
    expect(result.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var result = users.removeUser('33');
    expect(result).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var result = users.getUser('1');
    expect(result.id).toBe('1');
  });

  it('should not find a user', () => {
    var result = users.getUser('33');
    expect(result).toNotExist();
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Hikaru', 'Hide']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Akira']);
  });
});
