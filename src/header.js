import React from "react";

export default function Header() {
  return (
    <div className="row">
      <div className="col-2">
        <header>
          <h2 id="time">
            Sunday 01/01 <br />
            20:05h
          </h2>
        </header>
      </div>
      <div className="col-10">
        <form>
          <div className="row">
            <div className="col-7">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control"
                  id="inputCity"
                  placeholder="Enter city"
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                id="search-button"
              >
                Search 🔍
              </button>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn current-button"
                id="current-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
