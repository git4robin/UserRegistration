import Form from "./components/Form";
import BgImage from "./assets/bg.jpg";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="app-wrapper">
        <div className="app-container">
          <div className="app-logo">
            <div className="logo">
              <img src={Logo} alt="Robin" />
              <h1>Robin</h1>
            </div>
          </div>
          <div className="app-form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
