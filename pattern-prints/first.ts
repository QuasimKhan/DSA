import { log } from "node:console";

function printPatter(): any {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= 4; j++) {
            console.log("*");

        }
        log("\n")
    }

}

printPatter()