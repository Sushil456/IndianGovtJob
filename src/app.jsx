import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { ViewAllJobs } from "./ViewAllJobs";
import { Home } from "./Home";
import { ViewAllAdmits } from "./ViewAllAdmits";
import { ViewAllResults } from "./ViewAllResults";
import { ViewJob } from "./VIewJob";
export const App =()=>(
    <>
        
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/viewjobdetails" element={<ViewJob/>} />
                <Route path="/viewalljobs" element={<ViewAllJobs/>} />
                <Route path="/viewalladmits" element={<ViewAllAdmits/>} />
                <Route path="/viewallresults" element={<ViewAllResults/>} />
               
            </Routes>
        </BrowserRouter>

    </>
)