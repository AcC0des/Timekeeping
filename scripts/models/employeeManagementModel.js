export class EmployeeManagementModel {
  async getEmployeeManagementData () {
    try {
      const response = await fetch('https://localhost:7249/api/User/GetEmployeeManagement');

      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data)

      return data;
    }
    catch (error) {
      console.error(`Error: ${error}`);
    }
  }
}