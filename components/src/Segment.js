import React from "react";
const Segment = props => {
  return (
    <div>
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pdf file outline icon" />
          {props.textOne}
        </div>
        <div className="ui primary button">{props.addButton}</div>
      </div>
      <div className="ui placeholder segment">
        <h4 className="ui header">{props.infoTag}</h4>
        <p>{props.textTwo}</p>
      </div>
    </div>
  );
};
export default Segment;
