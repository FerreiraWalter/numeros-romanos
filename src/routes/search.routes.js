const express = require("express");
const ConvertRomanNumeralsController = require("../controller/ConvertRomanNumeralsController");

const convertRomanNumeralsRoutes = express.Router();
const convertRomanNumeralsController = new ConvertRomanNumeralsController();

/**
 * @api {post} /search
 * @apiName convertRomanNumeralsController.handle
 * @apiGroup RomanNumber
 * 
 * @apiSuccessExample Success response:
 *  HTTP/1.1 200 OK
{
  {
    "number": "LX",
      "value": 60
  } 
}
 */
convertRomanNumeralsRoutes.post("/", (httpRequest, httpResponse) => {
  const sla = convertRomanNumeralsController.handle(httpRequest, httpResponse);

  return sla;
});

module.exports = convertRomanNumeralsRoutes;