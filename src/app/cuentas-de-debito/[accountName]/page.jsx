import { notFound } from "next/navigation"

export default async function accountPage(props) {
    const {params} = await props
    const {accountName} = await params
    const response = await fetch(`http://localhost:3000/api/debit-accounts/${accountName}`)

    if (response.status === 404) {
        notFound()
    }

    const account = await response.json()

    return (
        <main>
            <h1>{account.accountName}</h1>
        </main>
    )
}

export async function generateMetadata({params}) {
    let pageTitle = "Not Found"
    const {accountName} = await params

    const account = await fetch(`http://localhost:3000/api/debit-accounts/${accountName}`)
        .then(res => res.json())
    
    if (account.accountName) {
        pageTitle = account.accountName
    }
    
    return {
        title: `${pageTitle} | Maple Bank`,
        description: `Información sobre la tarjeta ${pageTitle}`
    }
}