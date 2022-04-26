import React, {useState} from 'react';

const Checkout = ({cart, total, setCheckout}) => {

    const [checkoutcancel, setCheckoutCancel] = useState(true);


    

    function cancelCheckout(){
        setCheckoutCancel(false);
        setCheckout(false);
     }

    return (
        <div>
            { checkoutcancel && 
               <div className="checkout__bg">
               <div className="checkout">
                   {cart.map(item =>(
                       <div className="checkout__games">
                       <figure className="checkout__img">
                           <img src={item.url} alt="" />
                       </figure>
                      <div className="checkout__description">
                      <div className="checkout__title">
                           {item.title}
                       </div>
                       <div className="checkout__price">
                           ${(item.salePrice || item.originalPrice).toFixed(2)}
                       </div> 
                       <div className="checkout__quantity">
                            <p>Quantity: </p> {item.quantity}
                        </div>
                         </div>
                     </div>
                   ))}
                    <div className="checkout__btn">
                        <div className="checkout__total">
                        <h4>Total: ${(total().toFixed(2))} </h4></div>
                        <button className='btn no-cursor'>Buy Now</button>
                    </div>
                    <div className="cancel__btn">
                    <button className='btn-cancel' onClick={cancelCheckout}>Cancel</button>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default Checkout;
