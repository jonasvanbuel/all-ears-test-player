import './Player/styles/footer-mobile.scss';


const FooterMobile = () => {
  return (
    <footer className="footer-mobile noselect">
      <div className="horizontal-container">
        <div className="navigation-bar">
          <div className="navigation-icon">
            <i className="fas fa-home"></i>
            <p className="label">Home</p>
          </div>
          <div className="navigation-icon">
            <i className="fas fa-search"></i>
            <p className="label">Explore</p>
          </div>
          <div className="navigation-icon">
            <i className="far fa-play-circle"></i>
            <p className="label">Listen</p>
          </div>
          <div className="navigation-icon">
            <i className="fas fa-user"></i>
            <p className="label">My Ears</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMobile;





