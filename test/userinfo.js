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
   
    it("kita test get semua info user", done => {
        chai
          .request(urlApi) // chai meminta base URL dan port kita
          .get("/user/getbytoken") // 'get' disini adalah REST method dan '/kurir' adalah endpoint kita
          .set('Authorization', token2)
          .end((err, res) => {
            // kita melakukan response assertion disini
            expect(res).to.have.status(200);
            res.should.have.status(200);
            console.log(res.body);
          });
        done();
      });
    
});
