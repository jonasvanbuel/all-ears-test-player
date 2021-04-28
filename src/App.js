import Player from './Player/Player';
import Header from './Player/subComponents/Header';
import FooterMobile from './Player/subComponents/FooterMobile';
import utils from './Player/utils';
import { data } from './Player/data';

import './Player/styles/app.scss'


const App = () => {
  const renderResponsiveFooter = () => {
    const isMobile = utils.mobileCheck();
    if (isMobile) {
      return <FooterMobile />;
    }
  }

  return (
    <div id={utils.mobileCheck() ? "mobile-app" : "desktop-app"} className="app">
      <Header exhibition={data.exhibition} />
      <Player />
      {renderResponsiveFooter()}
    </div>
  )
}

export default App;
