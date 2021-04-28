import '../styles/footer-mobile.scss';


const FooterMobile = () => {

  const getLabelTreshold = () => {
    const height = window.innerHeight;
    if (height >= 700) {
      return true;
    }
    return false;
  }

  return (
    <footer className="footer-mobile noselect">
      <div className="horizontal-container">
        <div className="navigation-bar">
          <div className="navigation-icon">
            <i className="fas fa-home"></i>
            {getLabelTreshold() ? <p className="label">Home</p> : null}
          </div>
          <div className="navigation-icon">
            <i className="fas fa-search"></i>
            {getLabelTreshold() ? <p className="label">Explore</p> : null}
          </div>
          <div className="navigation-icon">
            <i className="far fa-play-circle"></i>
            {getLabelTreshold() ? <p className="label">Listen</p> : null}
          </div>
          <div className="navigation-icon">
            <i className="fas fa-user"></i>
            {getLabelTreshold() ? <p className="label">My ears</p> : null}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMobile;





