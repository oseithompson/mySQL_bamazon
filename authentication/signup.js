var inquirer = require('inquirer');
var md5 = require('md5');
var db = require("./db.js");
// var firebase = require('firebase');

function signUp(onSignedIn) {
    console.log("inside signUp");
    inquirer.prompt([
        {
            "name": "answerUserName",
            "type": "input", 
            "message": "What is your user name?"
        },
        {
            "name": "answerPassword",
            "type": "password", 
            "message": "What is your password?"
        }
    ]).then(answers => {

       db.login();

    //    var username = answers.answerUserName;
    //    var password = md5(answers.answerPassword);
        
        // firebase.database().ref("/").push({
        //         "username": answers.answerUserName,
        //         "password": md5(answers.answerPassword)
        //     });
       
        // connection.connect(function(err) {
        //    if (err) {
        //        throw err;
        //     } 

        //     connection.query(`CREATE TABLE IF NOT EXISTS users (
        //         id integer not null primary key auto_increment,
        //         username VARCHAR(50) NOT NULL,
        //         password VARCHAR(40) NOT NULL
        //     );
            
        //     INSERT INTO users (username, password) VALUES ('${username}', '${password}');
        //     `);

        // });
        
        
        onSignedIn(answers.answerUserName);
    });
}

module.exports = {
    signUp: signUp
}