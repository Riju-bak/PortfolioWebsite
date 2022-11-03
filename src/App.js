import './App.css';
import {Navbar} from "./components";
import {Header, About, Skills} from "./containers";

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
                <About/>
                <Skills/>
            </div>
        </div>
    );
}

export default App;
