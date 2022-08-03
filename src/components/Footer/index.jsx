import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css'

const URLS = {
  github: 'https://github.com/Agusdben/giphy-searchs',
  linkedin: 'https://www.linkedin.com/in/agustin-di-benedetto-7509071ba/'
}

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__section'>
        <article className='footer__links'>
          <a className='footer__link' target='_BLANK' href={URLS.github} rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a>
          <a className='footer__link' target='_BLANK' href={URLS.linkedin} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
        </article>
        <article className='footer__personal'>
          <p className='footer__copyright'>Created by <span>Agustin Di Benedetto</span></p>
        </article>
      </section>
    </footer>
  )
}

export default Footer
