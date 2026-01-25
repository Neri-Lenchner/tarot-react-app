import {JSX} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../components/layout/main/Main";
// import CourseForm from "../component/course-form/CourseForm";
// import CourseListRoute from "../component/course-list-route/CourseListRoute";


function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/tarot-deck" element={<Main />}/>
            <Route path="*" element={<Main />}/>
            <Route path="/" element={<Main />}/>
        </Routes>
    );
}

//  <Route path="/new-course" element={<CourseForm />}/>
//             <Route path="/courses-list" element={<CourseListRoute />}/>
//             {/*<Route path="/task-details/:id" element={<TaskDetails />}/>*/}
//             <Route path="/" element={<Main />}/>
//             <Route path="*" element={<Main />}/>

export default Routing;
