import utils from '../utils';

import '../styles/header.scss'

const Header = () => {
  return (
    <header className={`${utils.mobileCheck() ? "mobile-header" : "desktop-header"} noselect`}>
      <div className="horizontal-container">
        <div className="exhibition-details">
          <h1 className="exhibition-title">Bruce Nauman</h1>
          <h5 className="exhibition-location">Tate Modern, London</h5>
          <h5 className="exhibition-dates">until 21 February 2021</h5>
        </div>
        <div className="logo-button"></div>
      </div>
    </header>
  )
}

export default Header;
