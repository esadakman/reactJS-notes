import Msg from "./Msg";

const Person = ({ name, img, tel }) => {
  // const { name, img, tel } = props;
  const imgStyle = {
    display: "block",
    width: "400px",
    // height: "200px",
    margin: "auto",
    borderRadius: "10px",
  };
  return (
    <div>
      <Msg name={name} />
      <img src={img} alt="" style={imgStyle} />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
