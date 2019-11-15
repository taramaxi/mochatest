const assert = require("assert");
const chai = require("chai");
const axios = require("axios");
const expect = require("chai").expect;
const should = require("chai").should();
const chaiHttp = require("chai-http");
const {urlApi} = require('../helper/config');
const {getLoginToken} = require('../helper/auth');
chai.use(chaiHttp);

describe("API Testing", () => {
    
    let token2 = null; // deklarasi token 
    let datalogin = {
      email: "cornel.tara@smpkstagnes.sch.id",
      password:"adminku78",
    };

    before(async () => {
      token2 = await getLoginToken(datalogin);
    });
   
    it("kita test post change password", done => {
      console.log(token2);
      let body = {
        oldPassword:"adminku788",
        password:"adminku78",
        confirmPassword:"adminku78",
      };

      chai
        .request(urlApi)
        .post("/user/change-password")
        .set('Authorization', token2)
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

    it("kita test post change password dengan oldpassword salah", done => {
      let body = {
        oldPassword:"kiasu123",
        password:"member",
        confirmPassword:"member",
      };

      chai
        .request(urlApi)
        .post("/user/change-password")
        .set('Authorization', token2)
        .send(body)
        .end((err, res) => {
            console.log(res.body);
          // kita melakukan response assertion disini
          expect(res).to.have.status(401); // pengecekan apakah bisa terlaksana
         res.should.have.status(401);
         //res.should.be.json;
        });
      done();
    });

    it("kita test post change password tanpa oldpassword", done => {
        let body = {
          oldPassword:"",
          password:"member",
          confirmPassword:"member",
        };
  
        chai
          .request(urlApi)
          .post("/user/change-password")
          .set('Authorization', token2)
          .send(body)
          .end((err, res) => {
            console.log(res.body);
            // kita melakukan response assertion disini
            expect(res).to.have.status(422); // pengecekan apakah bisa terlaksana
           res.should.have.status(422);
           //res.should.be.json;
          });
        done();
      });
    
});
