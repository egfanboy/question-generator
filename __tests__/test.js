import QuestionGenerator from "../src/index";

describe(`QuestionGenerator`, () => {
  describe(`.interview`, () => {
    it(`should be a function of arity 1`, () => {
      expect(QuestionGenerator.interview).toBeInstanceOf(Function);
      expect(QuestionGenerator.interview).toHaveLength(1);
    });
    it(`should return an empty string if no keyword is given`, () => {
      //Act
      const result = QuestionGenerator.interview();

      //Assert
      expect(result).toEqual(``);
    });
    it(`should return a random string containing the supplied keyword`, () => {
      //Arrange
      const keyword = `turtles`;

      //Act
      const result = QuestionGenerator.interview(keyword);
      console.log(result);
      //Assert
      expect(result.includes(keyword)).toBeTruthy();
    });
  });
});
