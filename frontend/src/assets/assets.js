import a from './a.jpg'
import b from './b.jpg'
import c from './c.jpg'
import cart from './cart.png'
import d from './d.jpg'
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
    description:
      "A lightweight, usually knitted, puullovershirt, close-fitting and easy wear",
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
    description:
      "A lightweight, usually knitted, puullovershirt, close-fitting and easy wear",
    price: 100,
    image: [a, b, c, d],
    category: "women",
    subCategory: "full outfit",
    sizes: ["s", "m", "l"],
    date: 1716634345448,
    bestseller: true,
  },
]

