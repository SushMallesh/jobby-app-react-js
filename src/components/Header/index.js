import {Link, withRouter} from 'react-router-dom'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <div className="nav-items-lg-container">
        <ul className="nav-items-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <button onClick={onClickLogout} type="button" className="logout-button">
          Logout
        </button>
      </div>
      <ul className="nav-items-sm-container">
        <Link to="/" className="nav-link">
          <li>
            <AiFillHome className="nav-icon" />
          </li>
        </Link>

        <Link to="/jobs" className="nav-link">
          <li>
            <BsFillBriefcaseFill className="nav-icon" />
          </li>
        </Link>
        <li>
          <FiLogOut onClick={onClickLogout} className="nav-icon" />
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
