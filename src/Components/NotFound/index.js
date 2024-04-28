import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="container">
      <div className="not-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
        />
      </div>
      <h1 className="head">Page Not Found</h1>
      <p className="para">
        we are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
