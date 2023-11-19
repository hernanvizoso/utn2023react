import React from 'react';
import '../../styles/components/pages/NovedadesPage.css'



const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;


    return (
        <section className="holder">
            <h3>{title}</h3>
            <div className="servicioItemNo">
                <img src={imagen} alt='sin imagen' />
                <div className="info">
                    <h4>{subtitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: body }}></p>
                </div>
            </div>
        </section>
    );
}
export default NovedadItem;

