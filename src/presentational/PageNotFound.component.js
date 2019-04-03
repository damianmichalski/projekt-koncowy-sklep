import React from "react";
import { Link } from "react-router-dom";

export class PageNotFound extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <a href="https://www.freepik.com/free-photos-vectors/computer">
          <img
            src="https://image.freepik.com/free-vector/page-found-error-404_23-2147508324.jpg"
            alt="not found"
          />
        </a>
        <div className="notFoundTextArea">
          <Link className="link" to={"/1/name/desc"}>
            <p>Wróć na stronę główną</p>
          </Link>
        </div>
      </div>
    );
  }
}
