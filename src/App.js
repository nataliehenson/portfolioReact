import "./App.css";
import Main from "./Components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?w=1480&t=st=1662409444~exp=1662410044~hmac=d4fa27243362737b89e31355a3c1ed88b0918341463845b624f6f35b1aa82813")`,
                }}
            >
                <Main />
            </div>
        </Router>
    );
}

export default App;
