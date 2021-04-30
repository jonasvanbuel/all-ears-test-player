import logoButton from'../assets/logo-button-1000.png'
import './styles/logo-button.scss';

const LogoButton = () => {
  return (
    <img
      src={logoButton}
      className="logo-button"
      alt="All Ears logo button"
    />
  )
}

export default LogoButton;
