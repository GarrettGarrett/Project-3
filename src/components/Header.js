function Header(props){
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return (
  
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Chore Chart</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        {/* <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> */}
      </ul>
    </div>
  </nav>

  );
}
  
  export default Header;