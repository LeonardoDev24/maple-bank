import { getData } from "@/utils/database"

export async function GET() {
    try {
        const cards = await getData("creditCards")
        const data = {
            message: "This works!",
            cards: cards
        }
        return Response.json(data)
    } catch (error) {
        console.error(error)
        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}