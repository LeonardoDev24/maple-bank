export const metadata = {
    title: "Créditos"
}

export default async function Creditos() {
    const response = await fetch("http://localhost:3000/api/credits")
    const data = await response.json()
    console.log(data.message)
    const cards = data.cards
    return (
        <main>
            <section id="creditos">
                <h1>Créditos</h1>
                <ul>
                    {cards.map(card => <li key={card.id} className="card-preview">
                        <article>
                            <img src={`/products/credits/${card.image}.jpg`}
                                alt="Card Image"
                                className="card-image"
                            />
                            <h4><b>{card.creditName}</b></h4>
                            <a href={`/creditos/${card.image}`}
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