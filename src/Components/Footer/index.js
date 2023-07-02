import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-social'>
          <img src='/imagens/fb.png' alt='Facebook'></img>
          <img src='/imagens/tw.png' alt='Twitter'></img>
          <img src='/imagens/ig.png' alt='Instagram'></img>
        </div>
        <img src='/imagens/logo.png' alt='Organo'></img>
        <h5>Desenvolvido por Alura.</h5>
      </div>
    </footer>
  )
}

export default Footer;