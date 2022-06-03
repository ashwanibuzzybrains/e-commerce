/* eslint-disable no-case-declarations */
import {combineReducers} from 'redux'

const products = [
  {
    title: 'Embroidered Net Gown',
    brand: 'Manyavar',
    price: 62990,
    quantity: 16,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png',
  },
  {
    title: 'Front Load Machine',
    brand: 'Samsung',
    price: 22490,
    quantity: 24,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png',
  },
  {
    title: "Collider Black Dial Men's Watch",
    brand: 'Fossil',
    price: 14995,
    quantity: 33,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png',
  },
  {
    title: 'True Wireless Earbuds',
    brand: 'LG',
    price: 13499,
    quantity: 18,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png',
  },
  {
    title: "Maritime Men's Watch",
    brand: 'Titan',
    price: 11999,
    quantity: 35,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png',
  },
  {
    title: "Neutra Analog Men's Watch",
    brand: 'Fossil',
    price: 10995,
    quantity: 34,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png',
  },
  {
    title: 'Monsters Charm Toy',
    brand: 'Trendytap',
    price: 8600,
    quantity: 48,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png',
  },
  {
    title: 'Privateer Quartz Watch',
    brand: 'Fossil',
    price: 8122,
    quantity: 31,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png',
  },
  {
    title: 'Chronograph black Watch',
    brand: 'Fossil',
    price: 6395,
    quantity: 32,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png',
  },
  {
    title: 'Podcast Microphone',
    brand: 'MAONO',
    price: 5555,
    quantity: 22,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png',
  },
  {
    title: 'Virgin Avocado Oil',
    brand: 'ProV',
    price: 4144,
    quantity: 42,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png',
  },
  {
    title: 'Wrap Dress',
    brand: 'Vero Moda',
    price: 3039,
    quantity: 12,
    count: 0,
    isCart: false,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png',
  },
]

const addToCart = (state = products, action) => {
  const {payload} = action
  let arr = []

  switch (action.type) {
    case 'ADD_TO_CART':
      state.map(i => {
        if (i.title === payload.title) {
          if (payload.isCart === false) {
            arr = [...arr, {...action.payload, isCart: true, count: 1}]
            return arr
          }
          arr = [...arr, i]
          return arr
        }
        arr = [...arr, i]
        return arr
      })
      return [...arr]
    case 'INCREASE_COUNT':
      if (payload.quantity > payload.count) {
        state.map(i => {
          if (i.title === payload.title) {
            if (payload.isCart === true) {
              arr = [
                ...arr,
                {
                  ...action.payload,
                  isCart: true,
                  count: payload.count + 1,
                },
              ]
              return arr
            }
            arr = [...arr, i]
            return arr
          }
          arr = [...arr, i]
          return arr
        })
      } else {
        arr = [...state]
      }
      return [...arr]
    case 'DECREASE_COUNT':
      if (payload.count > 1) {
        state.map(i => {
          if (i.title === payload.title) {
            if (payload.isCart === true) {
              arr = [
                ...arr,
                {
                  ...action.payload,
                  isCart: true,
                  count: payload.count - 1,
                },
              ]
              return arr
            }
            arr = [...arr, i]
            return arr
          }
          arr = [...arr, i]
          return arr
        })
      } else {
        state.map(i => {
          if (i.title === payload.title) {
            if (payload.isCart === true) {
              arr = [
                ...arr,
                {
                  ...action.payload,
                  isCart: false,
                  count: 0,
                },
              ]
              return arr
            }
            arr = [...arr, i]
            return arr
          }
          arr = [...arr, i]
          return arr
        })
      }
      return [...arr]
    case 'DELETE_FROM_CART':
      state.map(i => {
        if (i.title === payload.title) {
          if (payload.isCart === true) {
            arr = [
              ...arr,
              {
                ...action.payload,
                isCart: false,
                count: 0,
              },
            ]
            return arr
          }
          arr = [...arr, i]
          return arr
        }
        arr = [...arr, i]
        return arr
      })
      return arr
    default:
      return state
  }
}

export default combineReducers({
  addToCart,
})
