
import TaskManager from "./TaskManager";
import "./Dashboard.css"
import LoginPage from "./LoginPage";

const Dashboard=()=>{
    return(
        <div>
            <div className="dash">
                <h1>Dashboard</h1>
            </div>
            <div>
                <div className="sec2">
                <TaskManager></TaskManager>
                <LoginPage></LoginPage>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;