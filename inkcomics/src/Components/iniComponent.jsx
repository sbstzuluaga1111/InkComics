import React from "react";
import diseño from "../Assets/Images/Prototipos/Logo1INK.png"

export default function Context() {
  return (
    <div className="separate">
      <div className="diseño">
        <img src={diseño} width="500rem"></img>
      </div>
      <div className="info">
        <div className="centrado">
          <h1>Inkcomics</h1>
              </div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda
                expedita, voluptatem saepe modi voluptatum aliquam explicabo ducimus
                quaerat aut fugit minus sequi quidem ipsam ab, possimus vero error
                eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                assumenda expedita, voluptatem saepe modi voluptatum aliquam explicabo
                ducimus quaerat aut fugit minus sequi quidem ipsam ab, possimus vero
                error eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ea assumenda expedita,
              </h3>
      </div>
    </div>
  );
}
