import react, {Component} from "react";
import "./App.css";
import LeadCollector from "./components/pages/LandingPage";


class App extends Component{
    render(){
        return(
            <div className="App">
                <LeadCollector/>
            </div>
        );
    }
}
export default App;