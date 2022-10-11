import { Container } from "./container.js"

export * from "./container.js"


const c = new Container()
console.log(await c.create())
