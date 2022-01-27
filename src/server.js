const HOST = 'server.com/';

// Populate the menus from the 'server'.

function populateCategories(category) {
    api.get(HOST + 'categories', {category}, function(categories) {
        let newCategories = '';
        for (const category of categories) {
            const categoryElement = `
                <li class="menuSubCatsItem">
                <a href="#" class="menuSubCatsItemLink">${category}</a>
                </li>
            `;
            newCategories += categoryElement;
        }

        const categoriesElement = 
            document.getElementsByClassName(`menuSubCatsItems${category}`)[0];
        categoriesElement.innerHTML = newCategories;
    });
}

// Server

function getCategories(data) {

    if (data.category == 'Top') {
        return [
            'Server apple',
            'Server banana',
            'Server pear',
            'Server orange'
      ];
    }

    if (data.category == 'Additional') {
        return [
            'Server square',
            'Server circle',
            'Server oval',
            'Server diamond'
        ];
    }
    return [];
  }
  
  const endpoints = {
    "/categories": {
        "get": getCategories
    }
  }

// Basic fake server functionality.
function getFunction(url, data, callback) {
    const domain = url.substring(0, url.indexOf("/"));
    const endpoint = url.substring(url.indexOf("/"), url.length);

    callback(endpoints[endpoint]["get"](data));
}

const api = {
    get: getFunction
};
