import React from "react";
import Lomponent from "./BotonNavComponent";

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
             <Lomponent/>
            </li>
            {/* Usar el componente importado correctamente */}
            <li>Ingreso</li>
            <li>Registro</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
