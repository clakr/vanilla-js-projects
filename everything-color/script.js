const colors = {
  names: [
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
  ],
}

const bgColor = document.querySelector('.main__hero')
const textColor = document.querySelector('.main__text')
const palette = document.querySelector('.main__emoji')

palette.addEventListener('click', (e) => {
  const random = Math.floor(Math.random() * colors.names.length)

  bgColor.style.backgroundColor = colors.names[random]
  textColor.textContent = colors.names[random]
})

textColor.addEventListener('click', (e) => {
  const tooltip = document.querySelector('.tooltip__text')

  tooltip.classList.add('display')

  setTimeout(() => {
    tooltip.classList.remove('display')
  }, 500)

  navigator.clipboard.writeText(textColor.textContent)
})
