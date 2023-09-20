import React from 'react'

export default function Component() {
  return (
    <div> 
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top colores-navar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/Frontend/paginas/inicio.html"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark colores-navar" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">InkComics</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" href="/Frontend/paginas/inicio.html">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Exclusivos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Globales</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Géneros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Populares</a>
            </li>

            <li className="nav-item">
              <a className="btn btn-secondary" href="#">Iniciar sesión</a>
              <a className="btn btn-primary" href="#">Registrarse</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../img/bacgroundBlur.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="../img/banner pprovisional 1.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="../img/banner pprovisional 2.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item active">
            <img src="../img/banner pprovisional 3.jpg" class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
    <div class="warperCont">
      <div class="wrapper">
        
        <div class="carrousell">
          <img src="/Frontend/img/banner pprovisional 1.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 2.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 3.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 2.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 1.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 3.jpg" alt="img" draggable="false"></img>
          <img src="/Frontend/img/banner pprovisional 2.jpg" alt="img" draggable="false"></img>
        </div>
         </div>
        </div>


    <script src="../node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../functionality/carrousel.js"></script>

</div>
  )
}
