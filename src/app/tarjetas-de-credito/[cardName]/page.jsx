import { notFound } from "next/navigation"

export default async function cardPage(props) {
    const {params} = await props
    const {cardName} = await params

    const response = await fetch(`http://localhost:3000/api/credit-cards/${cardName}`)
    console.dir(response)
    
    if (response.status === 404) {
        notFound()
    }
    
    const cardData = await response.json()
    console.info(cardData)

    return (
        <main>
            <h1>{cardData.cardName}</h1>
        </main>
    )
}

export async function generateMetadata({params}) {
    let pageTitle = "Not Found"
    const {cardName} = await params

    const card = await fetch(`http://localhost:3000/api/credit-cards/${cardName}`)
        .then(res => res.json())
    
    if (card.cardName) {
        pageTitle = card.cardName
    }

    return {
        title: `${pageTitle} | Maple Bank`,
        description: `Información sobre la tarjeta ${pageTitle}`
    }
}