//user -> get i/p from user
//array -> arr of elements 

interface Search {
    (element: string) : boolean;
}

const array: Array<string> = ['Sai', 'Ganesh', 'Pathma']

const SearchFn : Search = element => {
    return array.filter(data => data === element).length > 0    //satisfying the condition
}

const UserInput: string = prompt("Enter a value: ");

SearchFn(UserInput) ? console.log(`${UserInput} found`): console.log(`${UserInput} Not found`);