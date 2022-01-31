
interface Person{
    studId : string;
    courseName : string;
    getDetails : () => string;
}

export class Student implements Person{
    // private studId : string;
    // private courseName : string;
    // Constructor Injection
    constructor(public studId : string, public courseName : string){
        // this.studId = studId;
        // this.courseName = courseName
    }
    getDetails(){
        return `Student ID : ${this.studId} | Course Name : ${this.courseName}`
    }
}

let foo = new Student("F00001", "Angular")
console.log(foo.getDetails());