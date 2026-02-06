import Link from "next/link"
export default function NotFound(){
    return (
        <main>
            <h1>Error 404</h1>
            <h4>No se pudo encontrar la página que buscas</h4>
            <h5>
                <Link href={"/"}>Regresar</Link> 
            </h5>
        </main>
    )
}