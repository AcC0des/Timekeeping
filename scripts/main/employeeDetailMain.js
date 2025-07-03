import { loadNavigationLayout } from "../layouts/navigationLayout.js";
import { navigationData  } from "../data/navigationData.js";
import { displayNavigationData } from "../staticViews/navigationView.js";

await loadNavigationLayout();

await displayNavigationData(navigationData);