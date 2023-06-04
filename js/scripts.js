const card = document.getElementById('cards');
const filterBtns = document.querySelectorAll('.filterBtn');
const btnCard = document.getElementById('card_btn');

let menu = [
  {
    id: 0,
    title: 'Panqueques mantequilla',
    category: 'breakfast',
    price: 15.99,
    image: 'assets/img/breakfast/ButtermilkPancakes.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 1,
    title: 'Delicia campestre',
    category: 'breakfast',
    price: 15.99,
    image: 'assets/img/breakfast/countryDelight.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 2,
    title: 'Desayuno light',
    category: 'breakfast',
    price: 10.99,
    image: 'assets/img/breakfast/breakfast-light.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 3,
    title: 'Desayuno protéico',
    category: 'breakfast',
    price: 12.99,
    image: 'assets/img/breakfast/protein.breakfast.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 4,
    title: 'Sandwich doble',
    category: 'lunch',
    price: 13.99,
    image: 'assets/img/lunch/sandwichDouble.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 5,
    title: 'Pescado y ensalada',
    category: 'lunch',
    price: 13.99,
    image: 'assets/img/lunch/fish-and-salad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 6,
    title: 'Costillas BBQ',
    category: 'lunch',
    price: 13.99,
    image: 'assets/img/lunch/bbq-ribs.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 7,
    title: 'Tacos de barbacoa',
    category: 'lunch',
    price: 13.99,
    image: 'assets/img/lunch/barbecue-tacos.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 8,
    title: 'Batido de banana',
    category: 'shakes',
    price: 6.99,
    image: 'assets/img/milkshake/banana-milkshake.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 9,
    title: 'Batido de Chocolate',
    category: 'shakes',
    price: 8.99,
    image: 'assets/img/milkshake/chocolate-milkshake-twin-bar.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 10,
    title: 'Batido Ice Cream',
    category: 'shakes',
    price: 7.99,
    image: 'assets/img/milkshake/milkshake-ice-cream.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },

  {
    id: 11,
    title: 'Batido de frutilla',
    category: 'shakes',
    price: 6.99,
    image: 'assets/img/milkshake/strawberry-milkshake.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  displayMenu(menu);
});

// Items
const displayMenu = (menu) => {
  let displayCards = menu.map((item) => {
    return `<div class="card_container">
                    <img src="${item.image}" alt="" class="card_img">
                    <div class="card_description_container">
                        <h3 class="card_title">${item.title}<span>$${item.price}</span></h3>
                        <p class="card_paragraph">${item.description}</p>
                        <button class="card_btn" id="card_btn">Comprar</button>
                    </div>
            </div>`;
  });

  card.innerHTML = displayCards;
};

filterBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    let categ = event.currentTarget.dataset.id;

    let filterMenu = menu.filter((itemMenu) => {
      if (itemMenu.category === categ) {
        return itemMenu;
      }
    });

    if (categ === 'all') {
      displayMenu(menu);
    } else {
      displayMenu(filterMenu);
    }
  });
});

//Shop
btnCard.addEventListener('click', function () {
  console.log('Gracias!');
});
