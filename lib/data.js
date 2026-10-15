// EDIT THIS FILE: phone, address, prices, reviews. Everything on the site reads from here.
export const site = {
  name: "Smoki Bite",
  tagline: "Har Bite Mein Fire!",
  url: "https://smokibite.com", // change to your real domain
  phone: "+92 300 0000000", // display number
  year: "2026",
  whatsapp: "923000000000", // digits only, with country code, no +
  email: "hello@smokibite.com",
  address: "Your street, Your city, Pakistan",
  hours: "Daily 12:00 PM – 1:00 AM",
  instagram: "https://instagram.com/smokibite",
  facebook: "https://facebook.com/smokibite",
};

// price: number in Rs. Leave null to show "Ask price" until you fill them in.
export const menu = [
  { id: "shawarma", name: "Smoki Shawarma", img: "/img/shawarma.jpg", options: "Small / Large", price: null,
    desc: "Smoki chicken, fresh salad and special sauces wrapped in warm shawarma bread." },
  { id: "wrap", name: "Smoki Wrap", img: "/img/wrap.jpg", options: "With 1 dip sauce", price: null,
    desc: "Smoki chicken, crispy fries, fresh salad and special sauces in a wrap roti." },
  { id: "grill", name: "Smoki Grill Shawarma", img: "/img/grill.jpg", options: "Small / Large", price: null,
    desc: "Two shawarma breads grilled with chicken, cheese, salad and sauce, plus a dip." },
  { id: "fries", name: "Loaded Fries", img: "/img/fries.jpg", options: "Chicken, cheese, olives, jalapenos", price: null,
    desc: "Fries piled with smoki chicken, melted cheese, olives, jalapenos and capsicum." },
  { id: "burger", name: "Smoki Beef Grill Burger", img: "/img/burger.jpg", options: "1 Patty + Cheese / 2 Patties + 2 Cheese", price: null,
    desc: "Grilled beef patty, cheese, fresh salad and special sauces on a grill bun." },
  { id: "springroll", name: "Smoki Spring Roll", img: "/img/springroll.jpg", options: "4 / 6 / 8 pieces", price: null,
    desc: "Crisp rolls filled with smoki grill chicken and cheese, served with a dip." },
];

export const addons = ["Extra Cheese", "Extra Sauces", "NR Cold Drink (330ml / 500ml)", "Mineral Water (500ml / 1.5L)"];

export const reviews = [
  { name: "Ahmed R.", text: "The grill shawarma is the best I've had in the city. Crunchy outside, juicy inside, and the sauce is something else.", item: "Smoki Grill Shawarma" },
  { name: "Sana K.", text: "Ordered loaded fries for the whole group and the bowl was empty in five minutes. Cheese, jalapenos, all of it.", item: "Loaded Fries" },
  { name: "Hamza T.", text: "Fresh ingredients and fast delivery. The beef grill burger arrived hot and properly stacked.", item: "Smoki Beef Grill Burger" },
];
