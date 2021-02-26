const PpButton = ({ playing }) => {

  return (
    <button className="PpButton">{playing ? "true" : "false"}</button>
  );
}

export default PpButton;
