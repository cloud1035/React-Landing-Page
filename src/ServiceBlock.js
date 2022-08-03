export default function (props) {
  return (
    <div className="service">
      <img src={props.block.image} />
      <p>{props.block.title} </p>
    </div>
  );
}
