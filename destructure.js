const person = {name: 'Jack William', age: 17, job: 'hhjkkkk', gfName: 'Ema Wateson', phone: '01712888'};

const { phone, gfName,address,salary} = person;

const complexObject = {
    name:'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger leader'
    }
}
const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone

// console.log(gfName, phone,address,salary);
// console.log(gfName, phone,address,salary);

const friends = ['Sakib khan', 'Salman khan','Arman khan','Amir khan','Sharukh khan'];

const [chotoFriend, ...restFriends] = friends;
console.log(restFriends);
