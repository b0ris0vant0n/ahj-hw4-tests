import validate from '../validating'

test.each([
  ['Valid', '4276550037212597', true],
  ['Not valid 1','2232134345', false],
  ['Not valid 2','42256', false],
  ['Not valid 3','4276550037212598', false],
  ['Not valid 4','9999999999999999', false],

])(
  ('check the valid of credit card, should be %s'), 
  (_, value, expected) => {
    const result = validate(value)

    expect(result).toBe(expected)
});