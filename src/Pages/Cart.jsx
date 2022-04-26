import React, {useState} from 'react';
import EmptyCart from '../assets/undraw_empty_cart_co35.svg';
import { Link } from 'react-router-dom';
import Checkout from '../components/checkout';

const Cart = ({ cart, changeQuantity, removeItem }) => {

    const [checkout, setCheckout] = useState(false);

    const total = () => {
        let price = 0;
        cart.forEach(item => {
            price += +((item.salePrice || item.originalPrice) * item.quantity);
        });
        return price;
    };

    function setCheckoutTrue(){
       setCheckout(true);
    }

    return (
        <div id="books__body">
            <div id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                                Manga
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">
                                    Manga
                                </span>
                                <span className="cart__quantity">
                                    Quantity
                                </span>
                                <span className="cart__total">
                                    Price
                                </span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return (
                                            <div className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} alt="" className='cart__book--img' />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                                                        </span>
                                                        <button className='cart__book--remove' onClick={() => removeItem(book)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        max={99}
                                                        class="cart__input"
                                                        value={book.quantity}
                                                        onChange={(event) => {changeQuantity(book, event.target.value)}}/>
                                                        {book.quantity == 0 && removeItem(book)}
                                                </div>
                                                <div className="cart__total">
                                                    ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {
                                cart.length === 0 && (
                                    <div className="cart__empty">
                                        <img src={EmptyCart} className="cart__empty--img" alt="" />
                                        <h2>You don't have any Manga in your cart!</h2>
                                        <Link to="/games">
                                            <button className='btn'>Browse manga</button>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        {cart.length > 0 && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(total() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${(total().toFixed(2))}</span>
                            </div>
                            <button class="btn btn__checkout" onClick={setCheckoutTrue}>
                                Proceed to checkout
                            </button>
                            {
                                checkout && <Checkout cart={cart} total={total} setCheckout ={setCheckout}/>
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
