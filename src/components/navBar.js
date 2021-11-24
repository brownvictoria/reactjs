import CartWidget from './components/cartWidget'


const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <a class="navbar-brand" href="#"> TEC </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Computadoras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Celulares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accesorios</a>
        </li>
      </ul>
    <form class="d-flex">
    <a href="#menu"><CartWidget /></a>
    </form>

    </div>
  </div>
</nav>
            
    ) 
}

export default NavBar