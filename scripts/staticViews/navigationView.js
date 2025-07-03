export const displayNavigationData = async (navigationData) => {
  const navigationLists = document.querySelector('.js-navigation-lists');

  let navigationHtml = '';

  navigationData.forEach(navigation => {
    navigationHtml += `
      <li class="mb-5">
        <a class="css-navigation-link" href="${navigation.link}">
          ${navigation.icon}
          ${navigation.label}
        </a>
      </li>
    `
  })

  navigationLists.innerHTML = navigationHtml;
}