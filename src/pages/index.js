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
import BackgroundVideo from "./../videos/background-sin-audio.mp4"


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
        <a href="#section-2"><span>Cursos de Técnicas de Pilotaje</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-3"><span>Cursos Regulares</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-4"><span>Cursos Regulares para Pilotos</span></a>
      </li>
      <li className="nav-item">
        <a href="#section-5"><span>Antiguos alumnos</span></a>
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
            <h2>Cursos de técnicas de pilotaje</h2>
            <h4>COVID19: consultar disponibilidad</h4>
        </section>      
        <ul id="fechas-cursos">
          <li className="close"><span>11 Octubre</span></li>
          <li className="close"><span>8 Noviembre</span></li>
          <li className="open"><span>13 Diciembre</span></li>
        </ul>
        <div className="section-main-content-body">
          <ul id="fechas-cursos-info">
            <li><span>Seguro Accidentes y Motos Incluídos en el Precio</span></li>
            <li><span>Grupos Reducidos 4 Pax.</span></li>
            <li><span><FontAwesomeIcon id="fci-whatsapp-icon" icon={faWhatsapp} size="1x"/> Reserva Previa (+34 696 925 130)</span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div id="pimg2" className="pimg2"/>
    </div>
    <div id="pimg-container-2" className="pimg-container">            
      <div className="section-main-content">
        <section id="section-3" className="section">
            <h2>Cursos regulares</h2>
            <h4>2020 - 2021</h4>
        </section>
        <ul id="cursos-regulares">
          <li className="close"><span>Curso 2020 - 2021 completo</span></li>
        </ul>
        <div className="section-main-content-body">          
          <ul id="cursos-regulares-info">
            <li><span>Entrenamientos todas las semanas en técnicas de pilotaje</span></li>
            <li><span>Ganar confianza y seguridad</span></li>
            <li><span>Mejorarás tus tiempos hasta números insospechados</span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div className="pimg3"/>
    </div>
    <div id="pimg-container-3" className="pimg-container">
      <div className="section-main-content">
        <section id="section-4" className="section">
            <h2>Cursos regulares para pilotos</h2>
            <h4>2020 - 2021</h4>
        </section>        
        <ul id="cursos-regulares-pilotos">
          <li className="open"><span>Curso 2020 - 2021 plazas disponibles</span></li>
        </ul>
        <div className="section-main-content-body">          
          <ul id="cursos-regulares-pilotos-info">
            <li><span>Limpia, refina y actualiza tu pilotaje</span></li>
            <li><span>Pasión, atención, esfuerzo y capacidad de trabajo en cada entrenamiento</span></li>
            <li><span>Si lo tuyo es competir, esta es tu sección</span></li>
          </ul>
        </div>
      </div>
      <Fab/>
      <div className="pimg4"/>
    </div>
    <div id="pimg-container-4" className="pimg-container">
      <div className="section-main-content">
        <section id="section-5" className="section">
            <h2>Antiguos alumnos</h2>
        </section>
        <div className="antiguos-alumnos">
          <div id="unai-orradre" className="profile">
            <div className="profile-photo">
              <div className="photo-container">
                <img src="/static/unai_orradre.png"/>
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
                <img src="/static/xabi_zurutuza.png"/>
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
                <img src="/static/herve_novoa.png"/>
              </div>
            </div>
            <div className="profile-info">
              <div className="info-container">
                <div className="profile-name"><span>Herve Novoa</span></div>
                <div className="profile-description">
                  <p>Piloto del Campeonato Open easyRace. 6º posición en la clasificación general.</p>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
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
