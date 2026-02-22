import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "path"

export async function getData(table) {
    const dbPath = path.join(process.cwd(),"src/data/products.db")
    
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    })

    const result = await db.all(`SELECT * FROM ${table};`)
    // console.log(result)
    return result
}

// getData("creditCards")