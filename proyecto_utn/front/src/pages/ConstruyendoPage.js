import React from "react"
import { Link } from "react-router-dom";
import '../styles/components/pages/ConstruyendoPage.css'

const ConstruyendoPage = (props)=>{
    return (
        <main className="mainDiv">

        <div className="mainConstruccion">
            <div className="divTop"> 
            {/* <!-- div amarillo --> */}
                <p> </p>
            </div>
            <div className="mainConstructionItem">
                 {/* <!-- div imagen --> */}
                <img src="images/construccion/building.png" alt="En construccion"/>
            </div>
            <div className="mainConstructionItem">
                 {/* <!-- div under construction --> */}
                <div className="red">
                    <p className="red1"> Under </p>
                    <p className="red2"> construccion </p>
                </div>
            </div>
            <div className="mainConstructionItem; leyend1"> 
            {/* <!-- div lorem --> */}
                <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
            <div className="mainConstructionItem; divBoton">
                <Link className="aboton" to="/">Inicio</Link>
            </div>
        </div>

    </main>

    );
}
export default ConstruyendoPage;