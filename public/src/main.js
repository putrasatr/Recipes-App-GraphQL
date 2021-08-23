import { read } from "./app/actions/index.js";
import { rl } from "./app/constants/index.js"
import readline from "readline";
function clear() {
    // 1. Print empty lines until the screen is blank.
    process.stdout.write('\n\r\n');

    // 2. Clear the scrollback.
    // process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
}

const main = (i) => {
    console.log("Recipe Gallery\n")
    rl.question("Type ", async (e) => {
        const params = {
            limit: 1,
            offset: 10,
            keyword: e
        }
        const { items: data } = await read(params)
        switch (e) {
            case "clear":
                console.log(rl.cursor)
                main()
                break;
            case "load":
                data.forEach(({ recipe, category, ingridients }, i) => {
                    if (i === 0 || i === 1) {
                        const ing = ingridients.split(",")
                        //                     process.stderr.write(`
                        // ${recipe.toUpperCase()}
                        // _______________________
                        // Ingridients`)
                        console.log(`${recipe.toUpperCase()}`)
                    }
                })
                main()
                break;
            default:
                main()
                break;
        }
    })
}
main(0)
// process.stdin.on 'keypress', (s, key) ->
//   if key.ctrl && key.name == 'l'
//     process.stdout.write '\u001B[2J\u001B[0;0f'


// Try this example to see it in action!
// (function loop() {
//     let i = -40; // Print 40 lines extra.
//     (function printLine() {
//         console.log('line ' + (i + 41));
//         if (++i < process.stdout.columns) {
//             setTimeout(printLine, 40);
//         }
//         else {
//             clear();
//             setTimeout(loop, 3000);
//         }
//     })()
// })()