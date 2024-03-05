import { useContext, useState } from "react"
import sun from "./assets/icons/sun.svg"
import logo from './assets/logo.svg'
import ring from "./assets/ring.svg"
import shoppingCart from "./assets/shopping-cart.svg"
import CartDetails from "./cine/CartDetails"
import { MovieContext } from "./contexts"

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const { cartData } = useContext(MovieContext);

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
                <nav className="container flex items-center justify-between space-x-10 py-6 ">
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
                                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white 
                                text-center p-[2px] w-[30px] h-[30px] "> {cartData.length} </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}