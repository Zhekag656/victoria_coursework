import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AbousUs from "./pages/AbousUs";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<Main/>} path={"/"}/>
                <Route element={<AbousUs/>} path={"/about"}/>
                <Route element={<News/>} path={"/news"}/>
                <Route element={<Contact/>} path={"/contacts"}/>
                <Route element={<Gallery/>} path={"/gallery"}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
