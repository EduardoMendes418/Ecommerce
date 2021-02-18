import React from "react";
import "./Home.css";
import Product from "./Product";

import Banner from "../src/Image/banner01.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          //src="https://images-na.ssl-images-amazon.com/images/G/32/32/br-videogames/2021/Returnal/XCM_Manual_1302998_1545388_BR_br_gw_pc_tallhero_2x_br_pt_3637158_1500x600_1X_pt_BR._CB411704451_.jpg"
          src={Banner}
          alt=""
        />

        <div className=" home_row">
          <Product
            id="123451234"
            title="Novo Echo Show 10: Smart Display HD de 10,1 com movimento e Alexa - cor Preta"
            price={28.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31qdkoH1DsL._AC_SX184_.jpg"
            rating={5}
          />

          <Product
            id="54545454"
            title="Câmera Ip 3 Antenas Wifi Wireless 3ª Geração Visão Noturna"
            price={5000.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51CK0O1adWL._AC_SX569_.jpg"
          />

          <Product
            id="49538094"
            title="Redmi Note 9S Aurora Blue 6GB RAM 128GB"
            price={102.39}
            image="https://images-na.ssl-images-amazon.com/images/I/61ShPQu-u0L._AC._SR360,460.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="7777777"
            title="Relógio Monitor Cardíaco Garmin Forerunner 245 Music"
            price={5000.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71IocB4x93L._AC._SR360,460.jpg"
          />

          <Product
            id="65656565"
            title="Console PlayStation 5 - Digital Edition "
            price={60.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51HLZ2U3UqL._AC_UL320_SR320,320_.jpg"
          />

          <Product
            id="89898989"
            title="Console PlayStation 4 "
            price={50.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61bclIJ3o1L._AC_UL320_SR320,320_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90909090"
            title="Smart TV LED 24 Monitor LG 24TL520S, Wi-Fi, WebOS 3.5, DTV Machine Ready"
            price={7000.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/613wJn7jg-L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
