const assert = require("assert");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const urlApi = "https://admin.hobid.id/api";
chai.use(chaiHttp);

describe("API Testing", () => {
  let token2 = null; // deklarasi token 
  describe("testing POST", () => {
    it("kita test post login", done => {
      let body = {
        email: "cornel.tara@smpkstagnes.sch.id",
        password:"adminku788"
      };

      chai
        .request(urlApi)
        .post("/login")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(200); // pengecekan apakah bisa terlaksana
          res.should.have.status(200);
          token2 = res.body.data.token;
          // bisa juga compare dengan isi dari body
          
          assert.equal(res.body.message, "Login success");
          console.log(res.body);
        });
      done();
    });

    it("kita test post login password salah", done => {
      let body = {
        email: "member2@member2.com",
        password:"aaaaa"
      };

      chai
        .request(urlApi)
        .post("/login")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(401); 
          
          assert.equal(res.body.status, false,"EROR");
          console.log(res.body);
         
          

        });
      done();
    });

    it("kita test post login tanpa email dan password", done => {
      let body = {
        email: "",
        password:""
      };

      chai
        .request(urlApi)
        .post("/login")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(422); 
          assert.equal(res.body.status, false,"EROR");
          console.log(res.body);
          //assert.equal(res.body.status, false,"PESAN ERROR benar");
          

        });
      done();
    });

    it("kita test post login email yang blm vertifikasi", done => {
      let body = {
        email: "ithendrikus78@gmail.com",
        password:"adminku78"
      };

      chai
        .request(urlApi)
        .post("/login")
        .send(body)
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res).to.have.status(401); 
          assert.equal(res.body.status, false,"EROR");
          console.log(res.body);
          //assert.equal(res.body.status, false,"PESAN ERROR benar");
          console.log(token2);

        });
      done();
    });

  });
});
