interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    run(): void;
  }
  
  const animal: Dog = {
    name: 'Tom',
    age: 3,
    run() {
      console.log('The dog is running');
    },
  };
  