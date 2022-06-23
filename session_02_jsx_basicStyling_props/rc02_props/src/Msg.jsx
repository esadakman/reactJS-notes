const Msg = (props) => {
  const textStyling = {
    fontFamily: "Courier New",
    color: "darkblue",
    margin: "auto",
    textAlign: "center",
  };

  //! Destructiring
  const { name } = props;

  return (
    <div className="bgc">
      <h3 style={textStyling}>Hello there {name}</h3>
    </div>
  );
};

export default Msg;
