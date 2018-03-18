import sanitize, {trimString, toLowerCase} from "../src/helpers";

describe(`.sanitize`, () => {
  it(`should return the supplied string in the proper format`, () => {
    //Arrange
    const horribleString = `         I DO Not Like TURTLES`;

    //Act
    const result = sanitize(horribleString);

    //Assert
    expect(result).toEqual(`i do not like turtles`);
  });
});
describe(`.trimString`, () => {
  it(`should return the supplied string with no whitespace `, () => {
    //Arrange
    const whiteSpaceString = `                         wow`;

    //Act
    const result = trimString(whiteSpaceString);

    //Assert
    expect(result).toEqual(`wow`);
  });
});

describe(`.toLowerCase`, () => {
  it(`should return the lowercase version of the string`, () => {
    //Arrange
    const upperCaseString = `HOLY SHIT I AM MAD`;

    //Act
    const result = toLowerCase(upperCaseString);

    //Assert
    expect(result).toEqual(`holy shit i am mad`);
  });
});
