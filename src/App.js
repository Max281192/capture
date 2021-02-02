// Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from "./pages/OurWork";
//Global Style
import GlobalStyle from './components/GlobalStyle';
// Import Nav
import Nav from './components/Nav';
// Routing
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">

            <GlobalStyle/>

            <Nav/>

            <Switch>
                <Route path="/" exact>
                    <AboutUs/>
                </Route>
                <Route path="/work">
                    <OurWork/>
                </Route>
                <Route path="/contact">
                    <ContactUs/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
