const assert = require("assert");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const urlApi = "https://admin.hobid.id/api";
chai.use(chaiHttp);

describe("API Testing", () => {
  describe("testing POST", () => {
    it("kita test post register", done => {
      let body = {
        email:"cornel.tara@smpkstagnes.sch.id",
        password:"adminku788",
        confirmPassword:"adminku788",
        fullname:"Annah",
      };

      chai
        .request(urlApi)
        .post("/register")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          console.log(res.body);
          expect(res).to.have.status(200); // pengecekan apakah bisa terlaksana
         res.should.have.status(200);
         res.should.be.json;
         
        });
      done();
    });

    it("kita test post register tanpa fullname", done => {
      let body = {
        email:"monicaa@gmail.com",
        password:"adminku78",
        confirmPassword:"adminku78",
        fullname:"",
      };

      chai
        .request(urlApi)
        .post("/register")
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

    it("kita test post register dengan password 'a'", done => {
      let body = {
        email:"a@gmail.com",
        password:"a",
        confirmPassword:"a",
        fullname:"a",
      };

      chai
        .request(urlApi)
        .post("/register")
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
