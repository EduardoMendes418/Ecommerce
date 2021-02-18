import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import banner02 from "../src/Image/elevante.jpg";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          // src="https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/outlet2/desktopheader_1500x180_2._CB1198675309_.jpg"
          src={banner02}
          at=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title"> You Shooping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="ckeckout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
