const patterns = {
  nameCheckRegex: /Hello my name is (.+)/i,
  nameRecogRegex: /What is my name/i,
  toDoAddRegex: /Add (.+) to my to/i,
  toDoRemRegex: /Remove (.+) from my to/i, // I cut them short with purpose because sometimes when u say todo voice asistant either take it as "to do" or "todo"
  toDoListRegex: /What is on my list/i,
  dateCheckRegex: /What day is it today/i,
  mathCheckRegex: /What is (.+) (.+) (.+)/i,
};
const operations = {
  plus: (num1, num2) => num1 + num2,
  minus: (num1, num2) => num1 - num2, // Sometimes chatbot get it as string instead of symbols so i had to add double
  multiple: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
};

let nameSave = "";
let todos = [];
function getReply(command) {
  if (command.match(patterns.nameCheckRegex)) {
    let name = command.match(patterns.nameCheckRegex)[1];
    if (nameSave === name) {
      return `Nice to see you again ${nameSave}`;
    } else {
      nameSave = name;
      return `Nice to meet you ${name}`;
    }
  } else if (command.match(patterns.nameRecogRegex)) {
    if (nameSave === "") {
      return "You havent put any name";
    } else {
      return `Your name is ${nameSave}`;
    }
  } else if (command.match(patterns.toDoAddRegex)) {
    let listItem = command.match(patterns.toDoAddRegex)[1];
    listItem = listItem.charAt(0).toUpperCase() + listItem.slice(1);
    todos.push(listItem);
    return `${listItem} added to the to-do`;
  } else if (command.match(patterns.toDoRemRegex)) {
    let removeItem = command.match(patterns.toDoRemRegex)[1];

    removeItem = removeItem.charAt(0).toUpperCase() + removeItem.slice(1);
    todos.splice(todos.indexOf(removeItem), 1);
    return `${removeItem} removed from the todo`;
  } else if (command.match(patterns.toDoListRegex)) {
    return JSON.stringify(todos);
  } else if (command.match(patterns.dateCheckRegex)) {
    let date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  } else if (command.match(patterns.mathCheckRegex)) {
    let match = command.match(patterns.mathCheckRegex);

    // console.log(match);
    // let result = match(operations, num1, num2);
    // return result;

    const operator = match[2];
    const num1 = Number(match[1]);
    const num2 = Number(match[3]);

    if (operations[operator]) {
      const result = operations[operator](num1, num2);
      return result.toString(); // Got rid of long if statements
    }
  } else {
    return `I couldn't understand your command, please repeat it`;
  }
}

// Alert function with delay for homework
//   function timerAlert() {
//      alert("Time up");
//   }
//   setInterval(timerAlert, 4000);
//  timerAlert();

// getReply("");
// console.log(getReply("Hello my name is Benjamin"));
//   console.log(getReply("Hello my name is Benjamin"));
//   getReply("asd Hello my name is Benjamin");
// console.log(getReply("what is my name"));
// console.log(getReply("add ashellowd to my todo"));
// console.log(getReply("add fishing to my to do"));

// console.log(getReply("remove ashellowd from my todo "));
// console.log(getReply("What is on my list"));
// console.log(getReply("What day is it today"));
// console.log(todos);

// console.log(getReply("What is 3 + 5"));
// console.log(getReply("What is 3 - 5"));
// console.log(getReply("What is 3 / 5"));
// console.log(getReply("What is 3 plus 5"));
