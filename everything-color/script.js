// Global Variables

const names = [
  // Red
  'IndianRed',
  'LightCoral',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',

  // Pink
  'Pink',
  'LightPink',
  'HotPink',
  'DeepPink',
  'MediumVioletRed',
  'PaleVioletRed',

  // Orange
  'Coral',
  'Tomato',
  'OrangeRed',
  'DarkOrange',
  'Orange',

  // Yellow
  'Gold',
  'Yellow',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenrodYellow',
  'PapayaWhip',
  'Moccasin',
  'PeachPuff',
  'PaleGoldenrod',
  'Khaki',
  'DarkKhaki',

  // Purple
  'Lavender',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'Fuchsia',
  'Magenta',
  'MediumOrchid',
  'MediumPurple',
  'Amethyst',
  'BlueViolet',
  'DarkViolet',
  'DarkOrchid',
  'DarkMagenta',
  'Purple',
  'Indigo',
  'SlateBlue',
  'DarkSlateBlue',
  'MediumSlateBlue',

  // Green
  'GreenYellow',
  'Chartreuse',
  'LawnGreen',
  'Lime',
  'LimeGreen',
  'PaleGreen',
  'LightGreen',
  'MediumSpringGreen',
  'SpringGreen',
  'MediumSeaGreen',
  'SeaGreen',
  'ForestGreen',
  'Green',
  'DarkGreen',
  'YellowGreen',
  'OliveDrab',
  'Olive',
  'DarkOliveGreen',
  'MediumAquamarine',
  'DarkSeaGreen',
  'LightSeaGreen',
  'DarkCyan',
  'Teal',

  // Blue
  'Aqua',
  'Cyan',
  'LightCyan',
  'PaleTurquoise',
  'Aquamarine',
  'Turquoise',
  'MediumTurquoise',
  'DarkTurquoise',
  'CadetBlue',
  'SteelBlue',
  'LightSteelBlue',
  'PowderBlue',
  'LightBlue',
  'SkyBlue',
  'LightSkyBlue',
  'DeepSkyBlue',
  'DodgerBlue',
  'CornflowerBlue',
  'RoyalBlue',
  'Blue',
  'MediumBlue',
  'DarkBlue',
  'Navy',
  'MidnightBlue',

  // Brown
  'Cornsilk',
  'BlanchedAlmond',
  'Bisque',
  'NavajoWhite',
  'Wheat',
  'BurlyWood',
  'Tan',
  'RosyBrown',
  'SandyBrown',
  'Goldenrod',
  'DarkGoldenrod',
  'Peru',
  'Chocolate',
  'SaddleBrown',
  'Sienna',
  'Brown',
  'Maroon',

  // White
  'White',
  'Snow',
  'Honeydew',
  'MintCream',
  'Azure',
  'AliceBlue',
  'GhostWhite',
  'WhiteSmoke',
  'Seashell',
  'Beige',
  'OldLace',
  'FloralWhite',
  'Ivory',
  'AntiqueWhite',
  'Linen',
  'LavenderBlush',
  'MistyRose',

  // Grey
  'Gainsboro',
  'LightGrey',
  'Silver',
  'DarkGray',
  'Gray',
  'DimGray',
  'LightSlateGray',
  'SlateGray',
  'DarkSlateGray',
  'Black',
]

const history = []

// DOM Variables

const bgColor = document.querySelector('.main__hero')
const textColor = document.querySelector('.main__text')
const palette = document.querySelector('.main__emoji')
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const historyCardBody = document.querySelector('.card__history .card__body')

// Event Listeners

window.addEventListener('load', () => {
  changeColor(true)
})

palette.addEventListener('click', () => {
  changeColor(true)
})

textColor.addEventListener('click', (e) => {
  const tooltip = document.querySelector('.tooltip__text')

  console.log(tooltip)
  tooltip.classList.add('display')

  setTimeout(() => {
    tooltip.classList.remove('display')
  }, 750)

  navigator.clipboard.writeText(e.target.textContent)
})

// Functions

function generateRandom(length) {
  return Math.floor(Math.random() * length)
}

function generateProp() {
  const filtered = [...checkBoxes].filter((el) => el.checked).map((el) => el.id)
  const randomPropIndex = generateRandom(filtered.length)

  return filtered[randomPropIndex]
}

function generateValue(prop = generateProp()) {
  if (prop === 'names') {
    return names[generateRandom(names.length)]
  }

  if (prop === 'rgb') {
    const MAX_COLOR_VALUE = 255

    return `rgb(${generateRandom(MAX_COLOR_VALUE)}, ${generateRandom(
      MAX_COLOR_VALUE
    )}, ${generateRandom(MAX_COLOR_VALUE)})`
  }

  if (prop === 'hex') {
    return (
      '#' +
      Math.floor(Math.random() * (0xffffff + 1))
        .toString(16)
        .padStart(6, '0')
    )
  }

  if (prop === 'hsl') {
    const MAX_HUE_VALUE = 360
    const MAX_SATURATION_VALUE = 100
    const MAX_LIGHTNESS_VALUE = 100

    return `hsl(${generateRandom(MAX_HUE_VALUE)}, ${generateRandom(
      MAX_SATURATION_VALUE
    )}%, ${generateRandom(MAX_LIGHTNESS_VALUE)}%)`
  }
}

function changeColor(createElement = true, value = generateValue()) {
  if (value == null) {
    return
  }

  bgColor.style.backgroundColor = value
  textColor.textContent = value

  if (createElement) {
    historyUnshift(value)
  }
}

function historyUnshift(value) {
  if (history.length == 10) {
    history.pop()
  }
  history.unshift(value)
  createCardItem(value)
}

function createCardItem(value) {
  const item = document.createElement('div')

  item.classList.add('card__item')
  item.textContent = value
  item.style.backgroundColor = value

  historyCardBody.prepend(item)

  item.addEventListener('click', (e) => {
    changeColor(false, e.target.textContent)
  })

  handleCardItemList()
}

function handleCardItemList() {
  const itemList = document.querySelectorAll(
    '.card__history .card__body .card__item'
  )

  if (itemList.length == 10) {
    historyCardBody.removeChild(historyCardBody.lastElementChild)
  }
}
