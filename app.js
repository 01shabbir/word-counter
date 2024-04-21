import inquirer from "inquirer";
let usr_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: " please enter your sentence"
});
let word_counter = usr_ans.words.trim().split(" ").length;
console.log(`your sentence has ${word_counter}words`);
