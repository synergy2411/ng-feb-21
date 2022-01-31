"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    // private studId : string;
    // private courseName : string;
    // Constructor Injection
    function Student(studId, courseName) {
        this.studId = studId;
        this.courseName = courseName;
        // this.studId = studId;
        // this.courseName = courseName
    }
    Student.prototype.getDetails = function () {
        return "Student ID : ".concat(this.studId, " | Course Name : ").concat(this.courseName);
    };
    return Student;
}());
exports.Student = Student;
var foo = new Student("F00001", "Angular");
console.log(foo.getDetails());
