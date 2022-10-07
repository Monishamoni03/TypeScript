interface Iperson {
    name: string,
    age: number,
    email: string
}

interface ISalary {
    salary: string
}

interface IEmployee extends Iperson, ISalary {
    emp_Id: number,
    role: string,
    department: string,
    status: 'active' | 'inactive'
}

const Employee: IEmployee = {
    emp_Id: 123,
    role: 'Development',
    department: 'IT',
    status: 'active',
    name: 'Aj',
    age: 15,
    email: 'aj@gmail.com',
    salary: '15,000'
}