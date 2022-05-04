import config from '../config/config.js';
import AxiosService from '../services/AxiosService.js';
import axios from 'axios';
class EmployeeService{
  baseUrl=config.baseUrl;
  addEmployee(data){
    return AxiosService.postService(`${this.baseUrl}employee`, data);
  }
  getAllEmployees() {
    return axios.get(`${this.baseUrl}employee`);
  }
  getEmployee(employeeID) {
    return axios.get(`${this.baseUrl}employee/${employeeID}`);
}

updateEmployee(employeeID,data) {
    return axios.put(`${this.baseUrl}employee/${employeeID}`, data);
}

deleteEmployee(employeeID) {
    return axios.delete(`${this.baseUrl}employee/${employeeID}`);
}
}
export default new EmployeeService()