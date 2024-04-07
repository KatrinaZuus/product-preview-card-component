import "./product.css"
import ProductMobile from "/images/images/image-product-mobile.jpg"
import ProductDesktop from "/images/images/image-product-desktop.jpg"

export default function Product(){
    return (
      <>
      <img className="mobile" src={ProductMobile} alt="" />
      <img className="desktop" src={ProductDesktop} alt="" />
      </>
    )
}