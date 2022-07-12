const person = {

    name : {
        first: 'Bob',
        last: 'Smith'
    },
    
    age: 32,
    
    bio: function() {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    
    introduceSelf: function() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }

};

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;
