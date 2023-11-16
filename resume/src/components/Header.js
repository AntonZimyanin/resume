import "./style.css"


const Header = () => {
    return ( 
        <header class="header"> 


      

      <div class="menu-btn-container" style={{display: NaN}}>
        <div class="container">
          <button type="" class="menu-btn" style={{backgroundColor: "#000000"}}></button>
        </div>
      </div>

      {/* <nav class="nav hidden" >
        <ol class="nav-items">
          <li class="nav-item"><a href="#"></a></li>
          <li class="nav-item"><a href="#work"></a></li>
          <li class="nav-item"><a href="#blog"></a></li>
          <li class="nav-item"><a href="#skills"></a></li>
          <li class="nav-item">
            <a href="#contact" data-focused="last-focused"></a>
          </li>
        </ol>
      </nav> */}

      <div class="container">
        <div class="header-textbox">
         
          <h1 class="h1">
            Hi, I'm Syed Mohsin<br />
            Frontend Web Developer
          </h1>

        
          <p class="header-text">
            A frontend software engineer and interface designer who builds UX
            rich accessible and performant websites.
          </p>

          <div class="header-btns">
            <a href="#contact" class="btn btn-cta">Hire me</a>
            <a href="#work" class="btn btn-secondary">See my work</a>
          </div>
        </div>
      </div>
    </header>
     );
}
 
export default Header;