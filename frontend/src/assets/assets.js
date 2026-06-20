import a from './a.jpg'
import b from './b.jpg'
import c from './c.jpg'
import cart from './cart.png'
import d from './d.jpg'
import e from './e.jpg'

import g from './g.jpg'
import h from './h.jpg'
import i from './i.jpg'
import j from './j.jpg'
import k from './k.jpg'
import menu from './menu.png'
import search from './search.png'
import user from './user.png'
import dropdown from './dropdown.png'
import hero from './hero.jpg'
import style_street_logo from './style_street_logo.png'

export const assets = {
  user,
  search,
  cart,
  menu,
  dropdown,
  hero,
  style_street_logo,
}

export const products = [
  {
    _id: "aaaaa",
    name: "Street wear 1",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 100,
    image: [a, b, c, d],
    category: "women",
    subCategory: "full outfit",
    sizes: ["s", "m", "l"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "Street wear 2",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 120,
    image: [b, a, c, d],
    category: "men",
    subCategory: "topwear",
    sizes: ["s", "m", "l", "xl"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaac",
    name: "Street wear 3",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 140,
    image: [c, a, b, d],
    category: "women",
    subCategory: "topwear",
    sizes: ["s", "m"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Street wear 4",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 160,
    image: [d, a, b, c],
    category: "men",
    subCategory: "bottomwear",
    sizes: ["m", "l", "xl"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaae",
    name: "Street wear 5",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 180,
    image: [a, e, b, d],
    category: "kids",
    subCategory: "topwear",
    sizes: ["s", "m"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "Street wear 6",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 200,
    image: [g, d, a, c],
    category: "women",
    subCategory: "bottomwear",
    sizes: ["s", "m", "l"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaag",
    name: "Street wear 7",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 220,
    image: [i, d, a, b],
    category: "men",
    subCategory: "full outfit",
    sizes: ["m", "l", "xl"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaah",
    name: "Street wear 8",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 240,
    image: [j, c, b, a],
    category: "kids",
    subCategory: "bottomwear",
    sizes: ["s", "m"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaai",
    name: "Street wear 9",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 260,
    image: [k, d, c, b],
    category: "women",
    subCategory: "topwear",
    sizes: ["s", "m", "l"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaaj",
    name: "Street wear 10",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and easy wear",
    price: 280,
    image: [b, c, d, a],
    category: "men",
    subCategory: "topwear",
    sizes: ["m", "l"],
    date: 1716634345448,
    bestseller: false,
  },
]