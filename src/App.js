import './App.css';
import {Navbar} from "./components";
import {Header, About, Skills, Work, OpenSource, Footer} from "./containers";

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
                <About/>
                <Work/>
                <OpenSource/>
                <Skills/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
