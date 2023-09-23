import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col"></div>
                    <div className="homeImg">
                        <div id="carouselExampleCaptions" className="carousel slide" data-interval="2000"
                            data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/home/home_shoes_1.jpg" className="d-block w-100" alt="Nosotros" />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h5>Equipo de trabajo</h5>
                                        <p className="btn btn-sm btn-warning">
                                            {/* <a role="button" href="nosotros.html"
                                    style={{textDecoration:'none', color:'green'}} 
                                            >Nosotros</a> */}
                                            <Link to="/nosotros" style={{ textDecoration: 'none', color: 'green' }} >Nosotros</Link>

                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/home/home_shoes_2.jpg" className="d-block w-100" alt="Productos" />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h5>Nuestros productos</h5>
                                        <p className="btn btn-sm btn-warning">
                                            {/* <a role="button" href="productos.html"
          
                                            style={{textDecoration:'none', color:'green'}} 
                                            >Productos</a> */}
                                            <Link to="/productos" style={{ textDecoration: 'none', color: 'green' }} >Productos</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/home/home4_01.jpg" className="d-block w-100" alt="Tienda" />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h5>Tienda online</h5>
                                        <p className="btn btn-sm btn-warning">
                                            {/* <a role="button" href="tienda.html"
                                            style={{textDecoration:'none', color:'green'}} 
                                            >Tienda</a> */}
                                            <Link to="/tienda" style={{ textDecoration: 'none', color: 'green' }} >Tienda</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/home/home03_01.jpg" className="d-block w-100" alt="Novedades" />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h5>Nuestras Novedades</h5>
                                        <p className="btn btn-sm btn-warning">
                                            <Link to="/novedades" style={{ textDecoration: 'none', color: 'green' }} >Novedades</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Proximo</span>
                            </button>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            {/* <!-- fin carousel --> */}

            <div className="columnas fondo">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque laudantium, cum blanditiis
                        repellendus accusamus veniam placeat velit, voluptates provident esse inventore! Pariatur nisi
                        blanditiis natus eaque illo voluptatibus quas?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, exercitationem porro. Tenetur,
                        dolores natus eaque magnam illo excepturi suscipit facilis, quos unde maxime cupiditate ex aut
                        veniam aperiam odit voluptate.
                    </p>
                </section>
                <section className="bienvenidos">
                    <h2>Historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque laudantium, cum blanditiis
                        repellendus accusamus veniam placeat velit, voluptates provident esse inventore! Pariatur nisi
                        blanditiis natus eaque illo voluptatibus quas?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, exercitationem porro. Tenetur,
                        dolores natus eaque magnam illo excepturi suscipit facilis, quos unde maxime cupiditate ex aut
                        veniam aperiam odit voluptate.
                    </p>
                </section>
                <section className="testimoniosSection">
                    <h2>Testimonios</h2>
                    <div className="testimonios">
                        <span className="cita blink">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - Zapatos.com</span>
                    </div>
                    <div className="testimonios">
                        <span className="cita">Buen servicio</span>
                        <span className="autor">Mario Gomez - Zapatos.com</span>
                    </div>
                    <div className="testimonios">
                        <span className="cita blink">Excelente servicio</span>
                        <span className="autor">Juana Gutierrez - Deportes.com</span>
                    </div>
                    <div className="testimonios">
                        <span className="cita">Normal</span>
                        <span className="autor">Juan Perez - Veterinaria Perez</span>
                    </div>
                </section>
            </div>
        </main>

    );
}
export default HomePage;