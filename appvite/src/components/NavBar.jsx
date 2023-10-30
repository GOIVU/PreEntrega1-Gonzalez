import { ItemListContainer } from "./ItemListContainer"

export const NavBar = () => {

    return (
    <>
        <nav>
            <div>MiBian</div>
            <ul>
                <li><
                    a href="">Hombre</a>
                </li>
                <li>
                    <a href="">Mujer</a>
                </li>
                <li>
                    <a href="">Kids</a>
                </li>
            </ul>
        </nav>
        <ItemListContainer title="Tendencias" data= "Las tendencias del momento a un solo click" />
        <ItemListContainer title="temporada" data= "Disfruta de lo mejor de esta temporada" />
        <ItemListContainer data= "MiBian tu sitio de moda urbana, nos especializamos en brindar esa energia que buscas para ser unic@ con las mas autenticas y originales prendas del mercado. Sos unic@, sos MiBian" />
    </>
        )

}