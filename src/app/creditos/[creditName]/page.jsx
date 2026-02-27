import { notFound } from "next/navigation"

export default async function creditPage(props) {
    const {creditName} = await props.params
    const response = await fetch(`http://localhost:3000/api/credits/${creditName}`)
    console.dir(response)

    if (response.status === 404) {
        notFound()
    }

    const creditData = await response.json()
    console.info(creditData)

    return (
        <main>
            <h1>{creditData.creditName}</h1>
        </main>
    )
}

export async function generateMetadata({params}) {
    let pageTitle = "Not Found"
    const {creditName} = await params

    const credit = await fetch(`http://localhost:3000/api/credits/${creditName}`)
        .then(res => res.json())

    if (credit.creditName) {
        pageTitle = credit.creditName
    }
    
    return {
        title: `${pageTitle} | Maple Bank`,
        description: `Información sobre la tarjeta ${pageTitle}`
    }
}