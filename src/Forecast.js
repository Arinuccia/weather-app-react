import React from "react";
import "./App.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row ">
        <div className="col-2 forecast">
          <button>
            <ul>
              <li>Mon</li>
              <li>Temp</li>
              <li>img</li>
              <li>Description</li>
            </ul>
          </button>
        </div>

        <div className="col-2 forecast">
          <button>
            <ul>
              <li>Tue</li>
              <li>Temp</li>
              <li>img</li>
              <li>Description</li>
            </ul>
          </button>
        </div>

        <div className="col-2 forecast">
          <button>
            <ul>
              <li>Wed</li>
              <li>Temp</li>
              <li>img</li>
              <li>Description</li>
            </ul>
          </button>
        </div>

        <div className="col-2 forecast">
          <button>
            <ul>
              <li>Thu</li>
              <li>Temp</li>
              <li>img</li>
              <li>Description</li>
            </ul>
          </button>
        </div>
        <div className="col-2 forecast">
          <button>
            <ul>
              <li>Fri</li>
              <li>Temp</li>
              <li>img</li>
              <li>Description</li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
}
