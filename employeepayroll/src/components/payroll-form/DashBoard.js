import React, { useEffect, useState } from "react";
import './DashBoard.css';
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import Employee from "./employeeform";
import EmployeeService from "../../services/employee-service.js";


function Dashboard() {
    const [employeeArray, setEmployee] = useState([]);

useEffect(() => {
    getAllEmployees();
}, []);

const getAllEmployees = () => {
   EmployeeService.getAllEmployees().then(employee => {
       const allEmployees = employee.data;
       setEmployee(allEmployees);
   }).catch((error) => {
       alert(error);
   })
}

    return (
        <>
            <div className="header header-content">
                <div className="logo-content">
                    <img src={logo} className="logo-content-img" alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br/>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header-content employee-header">
                    <div className="emp-detail-text">
                        Employee Details
                        <div className="emp-count">10</div>
                    </div>
                    <Link to="/payroll" className="add-button">
                        <img className="add-button" src="../assets/plus_symbol.svg" alt=""/>Add Employee
                    </Link>

                </div>

                <div className="table-main">
                <Employee employeeArray={employeeArray}/>
                </div>
            </div>
        </>
    )
}
export default Dashboard;