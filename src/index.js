const contents = document.querySelector('#content')
const header = document.createElement('div');
header.setAttribute('id','header');
contents.appendChild(header);
const headerC1 = document.createElement('div');
headerC1.textContent = "Home";
headerC2.textContent = "Menu";
const headerC2 = document.createElement('div');
headerC1.classList.add('headerC');
headerC2.classList.add('headerC');
header.append('headerC1');
header.append('headerC2');