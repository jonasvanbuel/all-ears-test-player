import Header from './Header';
import Player from './Player/Player';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

import utils from './Player/utils'

import './Player/styles/app.scss'


const App = () => {
  const renderFooterMobile = () => {
    return (
      <FooterMobile />
    )
  }

  const renderFooterDesktop = () => {
    return (
      <FooterDesktop />
    )
  }

  const renderResponsiveFooter = () => {
    const isMobile = utils.mobileCheck();
    if (isMobile) {
      return renderFooterMobile();
    } else {
      return renderFooterDesktop();
    }
  }

  return (
    <div id={utils.mobileCheck() ? "mobile-app" : "desktop-app"} className="app">
      <Header />
      <Player />
      {renderResponsiveFooter()}
    </div>
  )
}

export default App;
