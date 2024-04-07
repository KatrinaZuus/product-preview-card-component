import "./description.css"
import Cart from "/images/images/icon-cart.svg"



export default function Description() {
    return (
    <>

    <div className="main">
        <p className="title">PERFUME</p>
        <p className="gabrielle">Gabrielle Essence Eau De Parfum</p>
        <p className="contains">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

        <div className="price">
            <h2>$149.99</h2>
            <p>$169.99</p>
        </div>

        <div className="addToCart">
            <img src={Cart} alt="" />
            <p>Add to Cart</p>

        </div>
    </div>
        
    </>
    )
}