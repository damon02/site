import { CONTACT_MAIL } from './utils/constants'

import './App.scss'

function App() {
  return (
    <div className="app">
      <h1 className="name">Damon Asberg</h1>
      <h2 className="description">Front-end developer</h2>
      <div className="socials">
        <a
          href={`mailto:${CONTACT_MAIL}`}
          target="_self"
          rel="noopener noreferrer"
          className="button mail"
        />
        <a
          href="https://www.github.com/damon02"
          target="_blank"
          rel="noopener noreferrer"
          className="button github"
        />
        <a
          href="https://www.linkedin.com/in/damon02/"
          target="_blank"
          rel="noopener noreferrer"
          className="button linkedin"
        />
      </div>
      <a
        href={`mailto:${CONTACT_MAIL}`}
        target="_self"
        rel="noopener noreferrer"
      >
        <h4 className="mail">{CONTACT_MAIL}</h4>
      </a>
      <div className="copy">&copy; {new Date().getFullYear()} - damon.dev</div>
    </div>
  )
}

export default App
