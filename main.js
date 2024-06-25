"use strict";
// POLYMORPHISM:
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    subject() {
        console.log("which subject?");
    }
}
class Result extends Student {
    subject() {
        console.log("what is the result?");
    }
}
class Numbers extends Student {
    subject() {
        console.log("what is your numbers in each subject?");
    }
}
function student(student) {
    student.subject();
}
let s1 = new Student();
let s2 = new Student();
s2.subject();
let s3 = new Result();
s3.subject();
let s4 = new Numbers();
s4.subject();
