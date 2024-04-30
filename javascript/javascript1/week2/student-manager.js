const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName.trim().length === 0) {
    console.log("Please enter the name");
  } else if (studentName === "Queen") {
    class07Students.push("Queen");
  } else if (class07Students.length > 5) {
    console.log("Cannot add more student in the class");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (class07Students.length <= 5) {
    class07Students.push(studentName);
  }
  // You write code here
}

function getNumberOfStudents() {
  return class07Students.length;
  // You write code here
}

console.log(getNumberOfStudents());
