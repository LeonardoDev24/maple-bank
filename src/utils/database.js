import sqlite3 from "sqlite3"
import { open } from "sqlite"

export async function getData(table) {
    const db = await open({
        filename: "./../data/products.db",
        driver: sqlite3.Database
    })

    const result = await db.all(`SELECT * FROM ${table};`)
    console.log(result)
}

getData("creditCards")