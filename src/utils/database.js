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

export async function searchByName(table, image) {
    const dbPath = path.join(process.cwd(),"src/data/products.db")
    
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    })

    const query = `SELECT * FROM ${table} WHERE image = ?`
    const card = await db.get(query,image)
    return card
}

// getData("creditCards")
// searchByName("creditCards","ocean")