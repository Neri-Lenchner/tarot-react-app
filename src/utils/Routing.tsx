import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../components/layout/main/Main";
import {TarotDeck} from "../components/tarot-deck/TarotDeck";
import './Routing.css';

function Routing(): JSX.Element {
    return (
        <div className="routing-container">
            <Routes>
                <Route path="/tarot-deck" element={<TarotDeck />}/>
                <Route path="*" element={<Main />}/>
                <Route path="/" element={<Main />}/>
            </Routes>
        </div>
    );
}

//  <Route path="/new-course" element={<CourseForm />}/>
//             <Route path="/courses-list" element={<CourseListRoute />}/>
//             {/*<Route path="/task-details/:id" element={<TaskDetails />}/>*/}
//             <Route path="/" element={<Main />}/>
//             <Route path="*" element={<Main />}/>

export default Routing;
