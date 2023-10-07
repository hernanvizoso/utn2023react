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
                    {/* <h2>Historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque laudantium, cum blanditiis
                        repellendus accusamus veniam placeat velit, voluptates provident esse inventore! Pariatur nisi
                        blanditiis natus eaque illo voluptatibus quas?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, exercitationem porro. Tenetur,
                        dolores natus eaque magnam illo excepturi suscipit facilis, quos unde maxime cupiditate ex aut
                        veniam aperiam odit voluptate.
                    </p> */}

<h2>Sucursales</h2>

{/* inicio accordion   */}

<div className="p-4 m-0 border-0 bd-example">
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div id="zonaSur" className="accordion-item" style={{backgroundColor: 'transparent'}} >
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed footer4" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                    aria-controls="flush-collapseOne" style={{backgroundColor: 'transparent'}}>
                    Zona Sur
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">

                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                    className="card-img-top" alt="San Martin de los Andes"></img>
                                <div className="card-body">
                                    <h5 className="card-title">San Martin de los Andes</h5>
                                    <p className="card-text">Horario de atencion: 10 a 17hs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/039.webp"
                                    className="card-img-top" alt="Pinamar"></img>
                                <div className="card-body">
                                    <h5 className="card-title ">Pinamar</h5>
                                    <p className="card-text">Horario de atencion: 10 a 22hs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="zonaOesteYCABA" className="accordion-item" style={{backgroundColor: 'transparent'}}>
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed footer4" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                    aria-controls="flush-collapseTwo" style={{backgroundColor: 'transparent'}}>
                    Zona Oeste y CABA
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/029.webp"
                                    className="card-img-top" alt="Sierra de Cordoba"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Sierra de Cordoba</h5>
                                    <p className="card-text">Horario de Atencion: 10 a 18hs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/052.webp"
                                    className="card-img-top" alt="CABA"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Ciudad de Bs. As.</h5>
                                    <p className="card-text">Horario de atencion: 10 a 21 hs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="zonaNorte" className="accordion-item" style={{backgroundColor: 'transparent'}}>
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed footer4" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseThree"
                    style={{backgroundColor: 'transparent'}}>
                    Zona Norte
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-2 g-2">
                        <div className="col">
                            <div className="card">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/005.webp"
                                    className="card-img-top" alt="Salta"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Salta</h5>
                                    <p className="card-text">Horario de atencion: 10 a 18 hs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/038.webp"
                                    className="card-img-top" alt="Mendoza"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Mendoza</h5>
                                    <p className="card-text">Horario de atencion: 10 a 19 hs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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