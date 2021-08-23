import { read } from "../../src/app/actions/index.js"

export async function getData() {
    const data = await read({ offset: 1, limit: 12, keyword: "" })
    console.log("public data", data)
    return data
}
