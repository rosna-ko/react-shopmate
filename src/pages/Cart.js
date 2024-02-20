import { Card } from "../components"

export const Cart = () => {
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
      ]

    return(
        <main>
            <section className="cartCard">
                <h1>Cart Items: {products.length}</h1>
                    {products.map((product) => (
                         <Card product={product} id={product.id}/>
                    ))}
            </section>
        </main>
    )
}