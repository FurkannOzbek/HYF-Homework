// Variable for students
const class07Students = [];
// The statements for checking if there is more than 6 students and if the name we want to add is exist and if queen try to be in the class etc.
// If nothing prevents it then we push our student name to the array
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
}
// Function for calculate how many students in the class
function getNumberOfStudents() {
  return class07Students.length;
}

console.log(getNumberOfStudents());
