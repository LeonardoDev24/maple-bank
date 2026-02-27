import { searchByName } from "@/utils/database";

export async function GET(request,{params}) {
    const {creditImg} = await params
    try {
        const credit = await searchByName("credits",creditImg)
        if (!credit) {
            return Response.json(
                {message: "Not Found"},
                {status: 404}
            )
        } else {
            return Response.json(credit)
        }
    } catch (error) {
        console.error(error)
        return Response.json(
            {message: "Internal server error"},
            {status: 500}
        )
    }
}