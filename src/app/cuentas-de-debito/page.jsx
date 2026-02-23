export const metadata = {
    title: "Cuentas de débito"
}

export default async function DebitAccounts() {
    const response = await fetch("http://localhost:3000/api/debit-accounts")
    const data = await response.json()
    console.log(data.message)
    const cards = data.cards
    return (
        <main>
            <section id="debit-cards">
                <h1>Cuentas de débito</h1>
                <ul>
                    {cards.map(card => <li key={card.id} className="card-preview">
                        <article>
                            <img src={`/products/debitAccounts/${card.image}.png`}
                                alt="Card Image"
                                className="card-image"
                            />
                            <h4><b>{card.accountName}</b></h4>
                            <a href={`/cuentas-de-debito/${card.image}`}
                                className="btn">
                                ¡Me interesa!
                            </a>
                        </article>
                    </li>)}
                </ul>
            </section>
        </main>
    )
}