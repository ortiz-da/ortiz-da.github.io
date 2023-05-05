import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./Home";
import Games from "./Games";
import Navigation from "./Navigation";
import Videos from "./Videos";
import Writing from "./Writing";
import About from "./About";
import Design from "./Design";
import Undertale from "./Writing/undertale";
import CoPlay from "./Writing/co-play";
import Depression from "./Writing/depression";
import Streaks from "./Writing/streaks";

function App() {
    return (
        <div className={"container"}>
            <BrowserRouter>
                <Navigation/>

                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path={"/games"} element={<Games/>}></Route>
                    <Route path={"/videos"} element={<Videos/>}></Route>

                    <Route path={"/writing"} element={<Writing/>}></Route>
                    <Route path={"/writing/undertale"} element={<Undertale/>}></Route>
                    <Route path={"/writing/co-play"} element={<CoPlay/>}></Route>
                    <Route path={"/writing/depression"} element={<Depression/>}></Route>
                    <Route path={"/writing/streaks"} element={<Streaks/>}></Route>


                    <Route path={"/about"} element={<About/>}></Route>

                    <Route path={"/design"} element={<Design/>}></Route>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
