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
  
    <nav class="#6200ea deep-purple accent-4">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Chore Wheel</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

      </ul>
    </div>
  </nav>

  );
}
  
  export default Header;