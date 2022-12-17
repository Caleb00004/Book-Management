import './checkout.css'

export default function Checkout({cart, removeCart, clearCart, setAlert, alertData}) {

    if (cart.length > 0) {
        
        const cartItems = cart.map(cartItem => (
            <tbody key={cartItem.id} className='cart-items'>
            <tr>
                <td className='bookname-icon'>
                    <svg onClick={() => removeCart(cartItem) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"/></svg>
                    <p>{cartItem.title}</p>
                    {/*  <img width={'15%'} height={'100%'} src={cartItem.url}/> */}
                </td>
                <td>
                    <p>${cartItem.price}</p>
                </td>
            </tr>
            </tbody>
        ))

        let sum = 0;

        const totalOrder = cart.map(({price}) => {
            sum = Number(price) + sum
        })

        const placeOrder = () => {
            clearCart()

            console.log(alertData)

            alertData.display === 'hide' && setAlert({display: 'show', message: 'Order Placed'})
            
            setTimeout(()=>{
                setAlert({display: 'hide', message: 'Order Placed'})
            }, 2000)
            
        } 
        return (
            <div className="checkout-page">
                <h1>Checkout</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Books</th>
                            <th>Price</th>
                        </tr>
                    </tbody>
                    {cartItems}
                </table>

                <h2>Total Order: ${sum}</h2>
                <button className='order-btn' onClick={placeOrder}>Place Order</button>
                <button className='order-btn' onClick={clearCart} style={{backgroundColor: 'red'}}>Clear Cart</button>
            </div>
        )
    }

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Books</th>
                        <th>Price</th>
                    </tr>
                </tbody>
            </table>

            <h2>Total Order: 0.00$</h2>
            <button disabled={true} className='order-btn'>Add Books To Cart</button>
        </div>
    )
}