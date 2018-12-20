const expect = require('expect');

const { Users } = require('./users');

describe('users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Nude Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Nude Course'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Avigii',
            room: 'Node'
        };
        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const userId = '2';
        const user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('sould not remove user', () => {
        const userid = '99';
        const user = users.removeUser(userid);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const user = users.getUser('2');
        expect(user).toMatchObject({
            id: '2',
            name: 'Jen',
            room: 'React Course'
        });
    });

    it('should not find user', () => {
        const user = users.getUser('404');
        expect(user).toBeFalsy();
    });

    it('should return names for nude course', () => {
        const userList = users.getUserList('Nude Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        const userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });
});