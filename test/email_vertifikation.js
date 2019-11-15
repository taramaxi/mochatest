const assert = require("assert");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const urlApi = "https://admin.hobid.id/api";
chai.use(chaiHttp);

describe("API Testing", () => {
  describe("testing post", () => {
    it("kita test POST Email Vertifikasi", done => {
      let body = {
       token:"$2a$10$JPzUTZo0cObcvM48AaSneL1tyj6WQUpMXwvyEaFivkga9Jxr7Fu",
      };
      chai
        .request(urlApi) // chai meminta base URL dan port kita
        .post("/email/verification") // 'get' disini adalah REST method dan '/kurir' adalah endpoint kita
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(200);
          res.should.have.status(200);
          console.log(res.body);
        });
      done();
    });
  });

  
});
