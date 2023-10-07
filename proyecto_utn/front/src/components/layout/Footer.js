import React from 'react';
import '../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div class="p-3 m-0 border-0 bd-example">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div id="mapaSitio" class="accordion-item footer4">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed footer4" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                                style={{backgroundColor: 'transparent'}}>
                                Mapa del sitio
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body footerDivImg2">

                                <div class="row row-cols-1 row-cols-md-1 g-1">
                                    <div class="col">
                                        <div class="card h-100 footerDivImg">
                                            <img src="mapaDelSitioRavie4.png" class="card-img-top h-50"
                                                 style={{marginTop: '75px'}} 
                                                alt="Mapa del sitio"></img>
                                            <div class="card-body">
                                                <br></br>
                                                <br></br>
                                                <h5 class="card-title margin385">Diseñado por Hernan Vizoso - © 2023</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='margin480'>Diseñado por Hernan Vizoso - &copy; 2023</p>
        </footer>

    );
}
export default Footer;