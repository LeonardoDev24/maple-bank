export default async function creditPage(props) {
    const {creditName} = await props.params
    return (
        <main>
            <h1>{creditName}</h1>
        </main>
    )
}