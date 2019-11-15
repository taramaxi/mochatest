const assert = require("assert");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const urlApi = "https://admin.hobid.id/api";
chai.use(chaiHttp);

describe("API Testing", () => {
  describe("testing POST", () => {
    it("kita test post forgotpassword", done => {
      let body = {
        email:"annamariabarekmiten@gmail.com",
      };

      chai
        .request(urlApi)
        .post("/forgotpassword")
        .send(body)
        .end((err, res) => {
            console.log(res.body);
          // kita melakukan response assertion disini
          expect(res).to.have.status(200); // pengecekan apakah bisa terlaksana
         res.should.have.status(200);
         res.should.be.json;
        });
      done();
    });

    it("kita test post forgotpassword dengan email yang tidak terdaftar", done => {
      let body = {
        email:"monicaa@gmail.com",
      };

      chai
        .request(urlApi)
        .post("/forgotpassword")
        .send(body)
        .end((err, res) => {
            console.log(res.body);
          // kita melakukan response assertion disini
          expect(res).to.have.status(422); // pengecekan apakah bisa terlaksana
         res.should.have.status(422);
         res.should.be.json;
        });
      done();
    });

    
  });
});
