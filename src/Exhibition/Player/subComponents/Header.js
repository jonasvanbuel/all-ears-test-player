import utils from '../utils';
import LogoButton from './LogoButton';
import '../styles/header.scss';

const Header = ({ exhibition }) => {
  const { details } = exhibition;

  return (
    <header className={`${utils.mobileCheck() ? "mobile-header" : "desktop-header"}`}>
      <div className="horizontal-container">

        <div className="exhibition-details-container">
          <div className="exhibition-details">
            <h1 className="title noselect">{details.mainTitle}</h1>
            <h1 className="sub-title noselect">{details.subTitle}</h1>
            <div className="location">
              <i className="fas fa-map-marker noselect"></i>
              <a href={details.locationUrl} target="_blank" rel="noreferrer">
                <h5 className="noselect">{details.location}</h5>
              </a>
            </div>
            <div className="dates noselect">
              <i className="fas fa-clock"></i>
              <h5>{`${details.dates.from} - ${details.dates.to}`}</h5>
            </div>
          </div>
        </div>

        <LogoButton />
      </div>
    </header>
  )
}

export default Header;
