export class EmployeeManagementView {
  constructor () {
    this.usersTableBody = document.querySelector('.js-users-table-body');
  }

  async displayEmployees(employeesData) {
    let employeesHtml = '';

    employeesData.forEach(employee => {
      employeesHtml += `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.role}</td>
          <td>${employee.name}</td>
          <td>${employee.department}</td>
          <td>${employee.position}</td>
          <td>${employee.registrationDate}</td>
        </tr>
      `
    })

    this.usersTableBody.innerHTML = employeesHtml;
  }
}