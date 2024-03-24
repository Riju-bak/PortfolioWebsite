import './App.css';
import {Navbar} from "./components";
import {Header, About, Skills, Work, OpenSource, Footer, Projects} from "./containers";

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
                <About/>
                <Work/>
                <Projects/>
                <OpenSource/>
                <Skills/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
