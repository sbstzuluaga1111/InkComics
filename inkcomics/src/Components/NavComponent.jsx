import React from "react";


export default function Component() {
  return (
    <div>
      <div className="Nav">
        {/* //derecha */}
        <div>logo</div>

        {/* //izquierda */}
        <div>
          <ul className="centrado">
            <li>
              <button>Coleccion</button>
            </li>
           
            <li>
              <button>Ingresar</button>
            </li>
            <li>
              <button>Registrar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
