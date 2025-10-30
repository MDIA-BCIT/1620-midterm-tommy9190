function checkPassword(password, input) {
    //If passward and input is the same, "granted", if different, "denied" !!!add password length so that it is not granted if it is less than 5 characters eventhough password matches input
    if (password === input && password.length >= 5) {
        console.log("Access Granted!");
    } else {
        console.log("Access Denied!");
    }
    //if input is 'forgot', logout hint
    if (input === "forgot") {
        console.log("Here is a hint");
        return;
    }
    //if input is 'reset', logout reset account
    if (input === "reset") {
        console.log("Let's reset your account");
        return;
    }
    //if they put at least one of 'forgot' or 'reset' for password, logout warning
    if (password === "forgot" || password === "reset") {
        console.log(
            "This password you set should not be used because it glitches the system"
        );
    }
    //if password is less than 5, logout reason
    if (password.length < 5) {
        console.log("Your password is too short!");
        return;
    }
}

checkPassword("123456", "123456"); //true
checkPassword("123456", "12345"); //false-does not match
checkPassword("123", "123"); //false-less than 5 character

checkPassword("123456", "forgot"); //true-give hint

checkPassword("123456", "reset"); //true-give suggestion

checkPassword("forgot", "123456"); //true-give warning
checkPassword("reset", "123456"); //true-give warning

checkPassword("12", "123456"); // true-give reason
