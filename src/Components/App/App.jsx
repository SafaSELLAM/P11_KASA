import {Router} from "../Router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import './app.scss'

export function App() {
    return (
        <div className="App column">
            <Header/>
            <Router />
            <Footer/>
        </div>
    );
}
