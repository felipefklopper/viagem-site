import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Inscreva-se na nossa newsletter para receber 
                novidades sobre pacotes e destinos.
            </p>
            <p className="footer-subscription-text">
                Desinscreva-se a qualquer momento
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Seu melhor e-mail" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Inscrever-se</Button>
                    
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Sobre</h2>
                    <Link to='/'>Como funciona</Link>
                    <Link to='/'>Termos e Condições</Link>
                    <Link to='/'>Investidores</Link>
                    
                </div>
                <div className="footer-link-items">
                    <h2>Contato</h2>
                    <Link to='/'>Trabalhe Conosco</Link>
                    
                    <Link to='/'>Sugestões</Link>
                    <Link to='/'>Reclamações</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer