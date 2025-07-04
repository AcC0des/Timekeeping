export const loadNavigationLayout = async () => {
  try {
    const response = await fetch('partials/navigationLayout.html');

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const navigationLayout = await response.text();

    const container = document.querySelector('.js-navigation-container');

    if (container) {
      container.innerHTML = navigationLayout;
    }
    else {
      console.error('Container Not Found');
    }
  }
  catch (error) {
    console.error(`Error: ${error}`);
  }
}