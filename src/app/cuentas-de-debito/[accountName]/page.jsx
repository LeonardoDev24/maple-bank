export default async function accountPage(props) {
    const {params} = await props
    const {accountName} = await params
    return (
        <main>
            <h1>{accountName}</h1>
        </main>
    )
}

export async function generateMetadata({params}) {
    const {accountName} = await params
    return {
        title: `${accountName} | Maple Bank`,
        description: `Información sobre la tarjeta ${accountName}`
    }
}