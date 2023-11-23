import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formdata, setFormdata] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormdata(oldData => ({
            ...oldData,
            [name]: value
        }));
    } 

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        const response = await
        axios.post('http://localhost:3000/api/contacto', formdata);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error===false) {
            setFormdata(initialForm);
        };
    }
    
    return (
        <main className="holder contacto fondo">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="" placeholder="Ingrese su nombre" 
                        value={formdata.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="Ingrese su mail" 
                        value={formdata.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel" name="telefono" id="" placeholder="Ingrese su telefono"
                        value={formdata.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Ingrese su mensaje"
                        value={formdata.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending? <p className="mailStatus">Enviando</p> : null}
                    {msg ? <p className="mailStatus">{msg}</p> : null}
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <ul>
                <li><i className="fa-solid fa-phone-volume fa-lg"></i>
                        {/* <a href="">4324-2388</a> */}
                        <Link to="">4324-2388</Link>
                    </li>
                    <li>
                       <i className="fa-sharp fa-solid fa-envelope fa-lg"></i>
                        <Link to='javascript:void(0)' onClick={() => window.location = 'mailito:Clothes&shoes@gmail.com'}> Email</Link>
                    </li>
                    <li>
                        <i className="fa-brands fa-square-instagram fa-lg"></i>
                        <Link target={"_blank"} to="https://www.instagram.com/Clothes&shoes/">Instagram</Link>
                    </li>
                    <li><i className="fa-brands fa-twitter fa-lg"></i>
                        <Link target={"_blank"} to="https://www.twitter.com/Clothes&shoes">Twitter</Link>
                    </li>
                    <li><i className="fa-brands fa-facebook fa-lg "></i>
                        <Link target={"_blank"} to="https://www.facebook.com/Clothes&shoes">Facebook</Link>
                    </li>
                    <li><i className="fa-brands fa-skype fa-lg "></i>
                        <Link target={"_blank"} to="https://Clothes&shoes@hotmail.com">Skype</Link>
                    </li>
                    <li><i className="fa-brands fa-linkedin fa-lg "></i>

                        <Link target={"_blank"} to="https://es.linkedin.com/Clothes&shoes">linkedin</Link>
                    </li>
                    <li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2095.8563654782474!2d-58.421091400381584!3d-34.59877039172899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de505d84c67e6!2sAv.%20Medrano%20951%2C%20C1179AAQ%20CABA!5e0!3m2!1ses!2sar!4v1693126508515!5m2!1ses!2sar"
                            width="300" height="150"
                            // style="border:0; float: right;"
                            // style={{border:'0',float:'right'}}
                            allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;