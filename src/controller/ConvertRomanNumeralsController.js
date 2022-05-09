const ConvertRomanNumeralsService = require("../service/ConvertRomanNumeralsService");

class ConvertRomanNumeralsController {
  handle(httpRequest, httpResponse) {
    const { text } = httpRequest.body;

    const convertRomanNumeralsService = new ConvertRomanNumeralsService();
    const result = convertRomanNumeralsService.execute({ text });

    return httpResponse.json(result);
  }
}

module.exports = ConvertRomanNumeralsController;
