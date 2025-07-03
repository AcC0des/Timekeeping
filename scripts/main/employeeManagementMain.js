import { loadNavigationLayout } from "../layouts/navigationLayout.js";
import { navigationData  } from "../data/navigationData.js";
import { displayNavigationData } from "../staticViews/navigationView.js";
import { EmployeeManagementModel } from "../models/employeeManagementModel.js";
import { EmployeeManagementView } from "../views/employeeManagementView.js";
import { EmployeeManagementController } from "../controllers/employeeManagementController.js";

await loadNavigationLayout();

await displayNavigationData(navigationData);

var employeeManagement = new EmployeeManagementController(new EmployeeManagementModel(), new EmployeeManagementView());

await employeeManagement.init();