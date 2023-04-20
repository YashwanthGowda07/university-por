const University = (props) => {
  return (
    <div className="uni-card">
      <h1 className="h2 uni-card-title">{props.name}</h1>
      <h2 className="h2 uni-card-text">Country: {props.country}</h2>
      <h3 className="h2 uni-card-text">
        Website: <a href={props.website}>{props.website}</a>
      </h3>
    </div>
  );
};

export default University;
