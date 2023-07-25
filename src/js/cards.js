export default function typeOfCard(value) {
    if (/(^4)/.test(value)) {
      return '.visa'
    } if (/(^5[1-5])/.test(value)) {
      return '.master'
    } if (/(^3[47])/.test(value)) {
      return '.amex'
    } if (/(^2)/.test(value)) {
      return '.mir'
    } if (/(^6)/.test(value)) {
      return '.discover'
    } if (/(^36)/.test(value)) {
      return '.diners'
    }
    return null
  }