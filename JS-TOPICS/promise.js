const { log } = require("node:console");

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Quasim" });
        }, 1000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
        return user;
    })
    .then((user) => console.log(user.id))
    .catch((err) => console.error(err))
    .finally(() => console.log("Executed in last"));
