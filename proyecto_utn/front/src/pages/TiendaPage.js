import { Link } from "react-router-dom";
import '../styles/components/pages/TiendaPage.css'

const TiendaPage = (props)=>{
    return (

        <main className="holder fondo">

        <h2>Tienda online</h2>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen01.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen02.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {/* <a href="./construyendo.html">comprar</a> */}
                    <Link to="/construyendo">comprar</Link>
                </div>
            </div>

        </div>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen03.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen04.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>

        </div>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen05.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen06.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7700</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>

        </div>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen07.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen08.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>

        </div>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen09.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen10.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>

        </div>
        <div className="galeria2">
            <div className="galeria2Item">
                <img src="./images/galeria/imagen11.jpg" alt="imagen 1"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>
            <div className="galeria2Item">
                <img src="./images/galeria/imagen12.jpg" alt="imagen 2"/>
                <div>
                    <h2>Producto</h2>
                    <hr/>
                    <p>precio: $7000</p>
                    <i className="fa-solid fa-cart-shopping"></i><Link to="/construyendo">comprar</Link>
                </div>
            </div>
        </div>

    </main>

    );
}
export default TiendaPage;