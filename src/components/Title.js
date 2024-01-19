import { LOGO_LINK } from "../utils/constants";
const Title = () => (
    <>
      <h1 id="title">Namaste React</h1>
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src={LOGO_LINK}
        />
      </a>
    </>
  );
  export default Title;