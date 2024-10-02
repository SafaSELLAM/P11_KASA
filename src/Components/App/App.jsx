import {Router} from "../Router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import './app.scss'

export function App() {
    return (
        <div className="app column ">
            <Header/>
            <div className="content">
            <Router />
            </div>
            <Footer/>
        </div>
    );
}
