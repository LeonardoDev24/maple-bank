export const metadata = {
    title: "Tarjetas de crédito"
}

export default async function CreditCards() {
    const response = await fetch("http://localhost:3000/api/credit-cards")
    const data = await response.json()
    console.log(data.message)
    const cards = data.cards
    return (
        <main>
            <section id="credit-cards">
                <h1>Tarjetas de crédito</h1>
                <ul>
                    {cards.map(card => <li key={card.id} className="card-preview">
                        <article>
                            <img src={`/products/creditCards/${card.image}.png`} 
                                alt="Card Image"
                                className="card-image" 
                            />
                            <h4><b>{card.cardName}</b></h4>
                            <h5>{card.description}</h5>
                            <h6>Anualidad ${card.annualFee}</h6>
                            <a href={`/tarjetas-de-credito/${card.image}`}
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