

export class Person {

    // public name: string;
    // private address: string;

    constructor( public fiorstName: string,
                 public lastName: string,
                 private address: string = 'No address'){
      
    }
}


// export class Hero extends Person {
   
    

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super( realName, 'New York');
//     }  

// }


export class Hero {
   
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
      // this.person = new Person(realName);
    }  

}



const tony = new Person('Tony', 'Strak', 'New York');


const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log( ironman );