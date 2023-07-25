import typeOfCard from "../cards";

test.each( [
    ['Visa', '42', ".visa"],
    ['Master Card', '53', ".master"],
    ['AMEX', '347', ".amex"],
    ['Discover', '625', ".discover"],
    ['MIR', '223', ".mir"],
    ['Diners', '364', ".diners"],
  
  ])(
    ('shoulde be %s'),
    (_, value, expected) => {
      const result = typeOfCard(value)
      
    expect(result).toBe(expected)
  })