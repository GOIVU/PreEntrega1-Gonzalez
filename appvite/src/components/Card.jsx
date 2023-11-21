export const MyCard = ({prod}) => {
    <Card style={{ with: "22rem", padding: "15px"}}/>
    {console.log(prod)}
    <Card.Img
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9q9qPjbZgXgXVAZZsE-K3WopFUSIar4rrJCYaTlEGJVxQPZzgCTChzSmPZt6MB_owmM&usqp=CAU"
        />
    <Card.Body>
        <Card.Title>
        {prod.categoria} {prod. precio}
        </Card.Title>
        <Card.Text>Talle: {prod.talle}</Card.Text>
        <Button >Ver</Button>
    </Card.Body>
}