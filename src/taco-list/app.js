/* selectors */
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


/* logic */
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  console.log(text);

  const item = {
    text,
    done: false
  }

  items.push(item);
  updateItems();
  this.reset();
}

function populateMenuItems(menuItems = [], menuList ) {
  menuList.innerHTML = menuItems.map((item, index) => {
    return `
      <li>
        <input type="checkbox" 
          data-index=${index} 
          id="item${index}" ${item.done ? 'checked' : ''} 
        />
        <label for="item${index}">${item.text}</label>
      </li>
    `;
  }).join('');
}

function toggleFoodItemSelected(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  updateItems();
}

function updateItems() {
  localStorage.setItem('items', JSON.stringify(items));
  populateMenuItems(items, itemsList);

}

populateMenuItems(items, itemsList);

/* Listeners */
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleFoodItemSelected);

