import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { Error } from "../Pages/Error/Error";
import { Housings } from "../Pages/Housings/Housings";
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housings />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
};
