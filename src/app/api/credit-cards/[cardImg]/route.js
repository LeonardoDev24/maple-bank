import { searchByName } from "@/utils/database"

export async function GET(request,{params}) {
    const {cardImg} = await params
    
    try {
        const card = await searchByName("creditCards",cardImg)
        if (!card) {
            return Response.json(
                {message: "Not Found"},
                {status: 404}
            )
        } else {
            return Response.json(card)
        }     
    } catch (error) {
        console.error(error)
        return Response.json(
            {message: "Internal server error"},
            {status: 500}
        )
    }
    
}