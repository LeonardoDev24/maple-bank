import { searchByName } from "@/utils/database";

export async function GET(request,{params}) {
    const {accountImg} = await params
    try {
        const account = await searchByName("debitAccounts",accountImg)
        if (!account) {
            return Response.json(
                {message: "Not Found"},
                {status: 404}
            )
        } else {
            return Response.json(account)
        }
    } catch (error) {
        console.error(error)
        return Response.json(
            {message: "Internal server error"},
            {status: 500}
        )
    }
}