import angular from 'angular';

export const NavbarComponent = {
  template: `
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
          <a class="navbar-brand" ui-sref="#">Teach Me How</a>
      </div>
      <ul class="nav navbar-nav">
          <!-- Load our routers
            <li><a ui-sref="home">Home</a></li>
          -->
      </ul>
    </nav>
  `  
}