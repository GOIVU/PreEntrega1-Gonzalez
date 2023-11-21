import { MyCard} from "./Card"

export const CardList = props => {
    <Container className="d-flex flex-wrap mt-3">
        {props.loading ? (
            <div>Loading...</div>
        ) : (
            props.producto.map(prod =>(
                <MyCard key={prod.id} prod={prod}/>
            ))
        )}
    </Container>
}