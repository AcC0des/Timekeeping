export class EmployeeManagementController {
  constructor (model, view) {
    this.model = model;
    this.view = view;
  }

  async init () {
    const data = await this.model.getEmployeeManagementData();
    await this.view.displayEmployees(data)
  }
}