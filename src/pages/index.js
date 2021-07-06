import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faYoutube,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import ImrsLogo from "./../images/imrs_logo.svg"
import BackgroundVideo from "./../videos/output.mp4"


const SocialNetworks = () => (
  <ul className="social-networks">
    <li>
      <a href="https://www.instagram.com/imrschool/"><FontAwesomeIcon id="sn-instagram-icon" className="sn-icon" icon={faInstagram} size="2x"/></a>
      <a href="https://www.youtube.com/channel/UC_PhAsFsa6s-qKDp4o7S-xA"><FontAwesomeIcon id="sn-youtube-icon" className="sn-icon" icon={faYoutube} size="2x"/></a>
      <a href="tel:+34696925130"><FontAwesomeIcon id="sn-whatsapp-icon" className="sn-icon" icon={faWhatsapp} size="2x"/></a>
    </li>
    <li className="sn-icon-info"><span>+34 696 925 130</span></li>
  </ul>
)

const ImrsLogoElement = () => (
  <div id="imrs-logo-container">
    <ImrsLogo />
  </div>
)

const Separators = () => (
  <div id="fullscreen-video-separators">
      <div id="fullscreen-video-separator-1" className="fullscreen-video-separator">
        <h1>I</h1>
        <h4>rún</h4>
      </div>
      <div id="fullscreen-video-separator-2" className="fullscreen-video-separator">
        <h1>M</h1>
        <h4>otorcycle</h4>
      </div>
      <div id="fullscreen-video-separator-3" className="fullscreen-video-separator">
        <h1>R</h1>
        <h4>iding</h4>
      </div>
      <div id="fullscreen-video-separator-4" className="fullscreen-video-separator">
        <h1>S</h1>
        <h4>chool</h4>
      </div>
    </div>
)

const NavigationBar = () => (
  <nav className="nav">
    <ul className="nav-items">
      <li className="nav-item">
        <a href="#section-2"><span>Formación de Pilotos</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-3"><span>Cursos de Conducción Deportiva</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-4"><span>Alquiler de Motos de Circuito</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-5"><span>Antiguos alumnos</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-6"><span>Patrocinadores</span></a>
      </li>
    </ul>
  </nav>
)

const ImrsBackgroundVideoElement = () => (
  <>
    <div className="fullscreen-video-wrap">
      <video autoPlay loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4"/>
      </video> 
    </div>
    <div className="background-overlay"></div>
  </>
)

const Fab = () => (
  <div className="fab"><a href="#"><i className="arrow up"></i></a></div>
)

const MainContentParallax = () => (
  <>
    <div className="pimg1"/>
    <div id="pimg-container-1" className="pimg-container"> 
      <div className="section-main-content">
        <section id="section-2" className="section">
            <h2>Formación de Pilotos</h2>
            <h4>Entrenamientos regulares en técnicas de pilotaje todas las semanas de Septiembre a Junio en Karting Indoor Irun</h4>
        </section>
        <ul id="cursos-regulares-pilotos">
          <li className="open"><span>Curso 2021 - 2022 plazas disponibles</span></li>
        </ul>
        <div className="section-main-content-body">
          <ul id="cursos-regulares-pilotos-info">
            <li><span>Seguro Accidentes y Motos Incluídos en el Precio</span></li>
            <li><span>Grupos Reducidos de 6 Personas.</span></li>
            <li><span><a href="tel:+34696925130"><FontAwesomeIcon id="fci-whatsapp-icon" icon={faWhatsapp} size="1x"/> Reservas (+34 696 925 130)</a></span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div id="pimg2" className="pimg2"/>
    </div>
    <div id="pimg-container-2" className="pimg-container">            
      <div className="section-main-content">
        <section id="section-3" className="section">
            <h2>Cursos de Conducción Deportiva</h2>
            <h4>Organizamos un curso al mes en las instalaciones del Karting Indoor Irun</h4>
        </section>
        <div className="section-main-content-body">
          <ul id="fechas-cursos-info">
            <li><span>Seguro Accidentes, Motos, Equipación y Catering Incluídos en el Precio</span></li>
            <li><span>Grupos Reducidos de 6 Personas.</span></li>
            <li><span>Precio: 160€/persona</span></li>
            <li><span><a href="tel:+34696925130"><FontAwesomeIcon id="fci-whatsapp-icon" icon={faWhatsapp} size="1x"/> Reservas (+34 696 925 130)</a></span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div className="pimg3"/>
    </div>
    <div id="pimg-container-3" className="pimg-container">
      <div className="section-main-content">
        <section id="section-4" className="section">
            <h2>Alquiler de Motos de Circuito</h2>
            <h4>Alquiler de motos de circuito con o sin monitor en el Circuito de Navarra</h4>
        </section>
        <div className="section-main-content-body">          
          <ul id="alquiler-motos-info">
          <li><span>Kawasaki Ninja 250R</span></li>
          <li><span>Yamaha R3</span></li>
          <li><span>Honda CBR600</span></li>
          <li><span>Precio: desde 180€</span></li>
          <li><span><a href="tel:+34696925130"><FontAwesomeIcon id="fci-whatsapp-icon" icon={faWhatsapp} size="1x"/> Reservas (+34 696 925 130)</a></span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div className="pimg4"/>
    </div>
    <div className="antiguos-alumnos-section">
      <section id="section-5" className="section">
          <h2>Antiguos alumnos</h2>
      </section>
      <div className="antiguos-alumnos">
        <div id="unai-orradre" className="profile">
          <div className="profile-photo">
            <div className="photo-container">
              <img src="/imrs-web/static/unai_orradre.png"/>
            </div>
          </div>
          <div className="profile-info">
            <div className="info-container">
              <div className="profile-name"><span>Unai Orradre</span></div>
              <div className="profile-description">
                <p>Piloto del Mundial SBK300. 7ª posición en el campeonato 2020.</p>
              </div>
            </div>            
          </div>
        </div>
        <div id="xabi-zurutuza" className="profile">
          <div className="profile-photo">
            <div className="photo-container">
              <img src="/imrs-web/static/xabi_zurutuza.png"/>
            </div>
          </div>
          <div className="profile-info">
            <div className="info-container">
              <div className="profile-name"><span>Xabi Zurutuza</span></div>
              <div className="profile-description">
                <p>Piloto del Campeonato ESBK PreMoto3 en la que ha logrado 2 victorias.</p>
              </div>
            </div>            
          </div>
        </div>
        <div id="herve-novoa" className="profile">
          <div className="profile-photo">
            <div className="photo-container">
              <img src="/imrs-web/static/herve_novoa.png"/>
            </div>
          </div>
          <div className="profile-info">
            <div className="info-container">
              <div className="profile-name"><span>Herve Novoa</span></div>
              <div className="profile-description">
                <p>Piloto del Campeonato Open easyRace. 6º posición en la clasificación.</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
    <Fab/>
    <div className="patrocinadores-section">
      <section id="section-6" className="section">
          <h2>Patrocinadores</h2>
      </section>
      <div className="patrocinadores-oro">
        <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/blackside.png"/>
          </div>
        </div>
        <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/bimtrazer-blackbg.png"/>
          </div>
        </div>
        <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/forestpioneer.png"/>
          </div>
        </div>
      </div>
      <div className="patrocinadores-plata">
      <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/sotxotaberna.png"/>
          </div>
        </div>
        <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/mrelectric.png"/>
          </div>
        </div>
        <div className="patrocinador">
          <div className="patrocinador-logo">
            <img src="/imrs-web/static/etxelur.png"/>
          </div>
        </div>
      </div>
      <div className="patrocinadores-bronce"></div>
    </div>
    <Fab/>
  </>
)

const IndexPage = () => (
  <Layout>
    <div id="page-trans"/>
    <ImrsLogoElement/>
    <section id="section-1">
      <SocialNetworks/>
      <Separators/>
      <NavigationBar/>
      <ImrsBackgroundVideoElement/>
    </section>
    <MainContentParallax/>
  </Layout>
)

export default IndexPage
