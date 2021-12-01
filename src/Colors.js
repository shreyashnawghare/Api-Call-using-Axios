import React from "react";
import data from "./data";

class Colors extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
    };
  }

  render() {
    return this.state.data[3].colors.map((col) => {
      return (
        <>
          <div className="col-lg-6 mb-4">
            <div className={col.classnam}>
              <div className="card-body">
                {col.name}
                <div className={col.classnam1}>{col.percent}</div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }
}

export default Colors;
