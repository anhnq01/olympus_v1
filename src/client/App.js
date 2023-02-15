import SideBar from './header/SideBar';
import Footer from './footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import ClientLinks from '../router/ClientLinks';


function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Start */}
        <SideBar />
        <ClientLinks></ClientLinks>
        {/* Header End */}
        {/* Container Start */}
        {/* <ClientLinks/> */}
        {/* Container End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </Router>
    </div>
  );
}

export default App;
