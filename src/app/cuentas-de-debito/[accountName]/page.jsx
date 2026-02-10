export default async function accountPage(props) {
    const {params} = await props
    const {accountName} = await params
    return (
        <main>
            <h1>{accountName}</h1>
        </main>
    )
}