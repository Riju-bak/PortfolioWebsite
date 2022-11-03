import './App.css';
import {Navbar} from "./components";
import {Header, About} from "./containers";

function App() {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
                <About/>
            </div>
        </div>
    );
}

export default App;
