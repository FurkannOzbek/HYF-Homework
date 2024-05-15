let nameSave = "";
let todos = [];
const suffixFirst = "hello my name is ";
const suffixSecond = "what is my name";
const suffixThird = "add";
const prefixThird = "to my todo";
const suffixFourth = "remove";
const prefixFourth = "from my todo";
const suffixFifth = "what is on my to-do";
const suffixSixth = "what day is it today";
const suffixSeventh = "what is";
let result;
function getReply(command) {
  const lowerCaseInput = command.toLowerCase();

  const startIndexFirst = lowerCaseInput.indexOf(suffixFirst);
  const startIndexThird = lowerCaseInput.indexOf(suffixThird);
  const startIndexFourth = lowerCaseInput.indexOf(suffixFourth);
  const startIndexSeventh = lowerCaseInput.indexOf(suffixSeventh);

  // 1- Logic for finding the name in command
  if (lowerCaseInput.includes(suffixFirst)) {
    if (startIndexFirst !== -1) {
      const name = command
        .slice(startIndexFirst + suffixFirst.length, command.length)
        .trim();

      if (nameSave.toLowerCase() === name.toLowerCase()) {
        console.log(`Nice to see you again ${nameSave}`);
      } else {
        nameSave = name;
        console.log(`Nice to meet you ${name}`);
      }
    }
  }
  // 2- What is my name command
  if (lowerCaseInput == suffixSecond) {
    if (nameSave === "") {
      console.log("You havent put any name");
    } else {
      console.log(`Your name is ${nameSave}`);
    }
  }
  // 3- Finding element in command and adding to do list
  if (lowerCaseInput.includes(suffixThird)) {
    let listItem = command.slice(
      startIndexThird + suffixThird.length + 1,
      command.length - prefixThird.length - 1
    );
    listItem = listItem.charAt(0).toUpperCase() + listItem.slice(1);
    todos.push(listItem);
    console.log(`${listItem}added to the to-do`);
  }
  // 4- Remove the element which is in command from array
  if (lowerCaseInput.includes(suffixFourth)) {
    let removeItem = command.slice(
      startIndexFourth + suffixFourth.length + 1,
      command.length - prefixFourth.length - 1
    );
    removeItem = removeItem.charAt(0).toUpperCase() + removeItem.slice(1);
    let removeIndex = todos.indexOf(removeItem);
    todos.splice(removeIndex, 1);
    console.log(`${removeItem}removed from the todo`);
  }
  // 5- what is in to do list
  if (lowerCaseInput.includes(suffixFifth)) {
    console.log(todos);
  }
  // 6-What day is it today?
  if (lowerCaseInput.includes(suffixSixth)) {
    let date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    console.log(date.toLocaleDateString("en-GB", options));
  }
  // 7- Simple math logic
  if (lowerCaseInput.includes(suffixSeventh)) {
    let remainingText = command.slice(
      startIndexSeventh + suffixSeventh.length + 1,
      command.length
    );
    remainingText = remainingText.split(" ");
    console.log(remainingText);
    if (remainingText[1] == "+" || remainingText[1] == "plus") {
      result = Number(remainingText[0]) + Number(remainingText[2]);
      console.log(result);
    } else if (remainingText[1] == "*" || remainingText[1] == "multiple") {
      result = Number(remainingText[0]) * Number(remainingText[2]);
      console.log(result);
    } else if (remainingText[1] == "/" || remainingText[1] == "divide") {
      result = Number(remainingText[0]) / Number(remainingText[2]);
      console.log(result);
    } else if (remainingText[1] == "-" || remainingText[1] == "minus") {
      result = Number(remainingText[0]) - Number(remainingText[2]);
      console.log(result);
    } else {
      console.log("error");
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
