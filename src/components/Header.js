import Title from "./Title";

const Header = () => (
    <div className="header">
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is an h2 tag</h2>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

  export default Header;
  
  