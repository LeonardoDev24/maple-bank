export default async function cardPage(props) {
    const {params} = await props
    const {cardName} = await params
    return (
        <main>
            <h1>{cardName}</h1>
        </main>
    )
}