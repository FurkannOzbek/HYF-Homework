const patternNameCheck = "hello my name is ";
const patternNameRecog = "what is my name";
const patternToDoAdd = "add";
const patternToDo = "to my todo";
const patternToDoRem = "remove";
const patternFromToDo = "from my todo";
const patternMyToDo = "my to-do list";
const patternDayCheck = "what day is it today";
const patternMathCal = "what is";

let result;
let nameSave = "";
let todos = [];
function getReply(command) {
  const lowerCaseInput = command.toLowerCase();

  //   const match = lowerCaseInput.match(patternNameCheck
  const startIndexFirst = lowerCaseInput.indexOf(patternNameCheck); //   console.log(match);
  const startIndexThird = lowerCaseInput.indexOf(patternToDoAdd);
  const startIndexFourth = lowerCaseInput.indexOf(patternToDoRem);
  const startIndexSeventh = lowerCaseInput.indexOf(patternMathCal);
  if (lowerCaseInput.includes(patternNameCheck)) {
    if (startIndexFirst !== -1) {
      const name = command
        .slice(startIndexFirst + patternNameCheck.length, command.length)
        .trim();

      if (nameSave.toLowerCase() === name.toLowerCase()) {
        return `Nice to see you again ${nameSave}`;
      } else {
        nameSave = name;
        return `Nice to meet you ${name}`;
      }
    }
  }
  if (lowerCaseInput.includes(patternNameRecog)) {
    if (nameSave === "") {
      return "You havent put any name";
    } else {
      return `Your name is ${nameSave}`;
    }
  }
  if (lowerCaseInput.includes(patternToDoAdd)) {
    let listItem = command.slice(
      startIndexThird + patternToDoAdd.length + 1,
      command.length - patternToDo.length - 1
    );
    listItem = listItem.charAt(0).toUpperCase() + listItem.slice(1);
    todos.push(listItem);
    return `${listItem}added to the to-do`;
  }
  if (lowerCaseInput.includes(patternToDoRem)) {
    let removeItem = command.slice(
      startIndexFourth + patternToDoRem.length + 1,
      command.length - patternFromToDo.length - 1
    );
    removeItem = removeItem.charAt(0).toUpperCase() + removeItem.slice(1);
    let removeIndex = todos.indexOf(removeItem);
    todos.splice(removeIndex, 1);
    return `${removeItem}removed from the todo`;
  }
  if (lowerCaseInput.includes(patternMyToDo)) {
    console.log(todos);
    let toDoList = document.getElementById("to-do");
    for (var i = 0; i < todos.length; i++) {
      toDoList.innerHTML += todos[i];
    }
    let strTodos = JSON.stringify(todos);
    return strTodos;
  }
  if (lowerCaseInput.includes(patternDayCheck)) {
    let date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }
  if (lowerCaseInput.includes(patternMathCal)) {
    let remainingText = command.slice(
      startIndexSeventh + patternMathCal.length + 1,
      command.length
    );
    remainingText = remainingText.split(" ");
    // console.log(remainingText);
    if (remainingText[1] == "+" || remainingText[1] == "plus") {
      result = Number(remainingText[0]) + Number(remainingText[2]);
      result = result.toString();
      return result;
    } else if (remainingText[1] == "*" || remainingText[1] == "multiple") {
      result = Number(remainingText[0]) * Number(remainingText[2]);
      result = result.toString();
      return result;
    } else if (remainingText[1] == "/" || remainingText[1] == "divide") {
      result = Number(remainingText[0]) / Number(remainingText[2]);
      result = result.toString();
      return result;
    } else if (remainingText[1] == "-" || remainingText[1] == "minus") {
      result = Number(remainingText[0]) - Number(remainingText[2]);
      result = result.toString();
      return result;
    }
  }
  // Alert function with delay for homework
  //   function timerAlert() {
  //      alert("Time up");
  //   }
  //   setInterval(timerAlert, 4000);
  //  timerAlert();
}

// getReply("");
// getReply("Hello my name is Benjamin");
// getReply("asd Hello my name is Benjamin");
// getReply("what is my name");
// getReply("add ashellowd to my todo");
// getReply("add fishing to my todo");
// getReply("remove ashellowd from my todo ");
// getReply("What is on my todo");
// getReply("What day is it today");

 console.log(getReply("What is 3 + 5"));
