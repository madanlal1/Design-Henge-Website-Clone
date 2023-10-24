const Card = (props) => {
  return (
    <>
      {props.data.map((currData) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 colms">
            <div id="card">
              <div id="logo">{currData.img}</div>
              <div className="title">
                <h3>{currData.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
