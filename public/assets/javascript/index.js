import { read } from "../../src/app/actions/index.js";
// const { getData } = require("../../js")
async function run() {
    const data = await read()
}
run()