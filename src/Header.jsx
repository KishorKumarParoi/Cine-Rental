import { useState } from "react"
import sun from "./assets/icons/sun.svg"
import logo from './assets/logo.svg'
import ring from "./assets/ring.svg"
import shoppingCart from "./assets/shopping-cart.svg"
import CartDetails from "./cine/CartDetails"

export default function Header() {
    const [showCart, setShowCart] = useState(false);

    function handleCart() {
        console.log('cart is showing...');
        setShowCart(true);
    }

    function handleClose() {
        setShowCart(false);
    }

    return (
        <>
            {showCart && <CartDetails onClose={handleClose} />}

            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={logo} width="139" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={ring} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={sun} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" onClick={handleCart} >
                                <img src={shoppingCart} width="24" height="24" alt="" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}