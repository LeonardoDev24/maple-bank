export default async function creditPage(props) {
    const {creditName} = await props.params
    return (
        <main>
            <h1>{creditName}</h1>
        </main>
    )
}

export async function generateMetadata({params}) {
    const {creditName} = await params
    return {
        title: `${creditName} | Maple Bank`,
        description: `Información sobre la tarjeta ${creditName}`
    }
}