const assert = require("assert");
const chai = require("chai");
const path = require("path");
const axios = require("axios");
const expect = require("chai").expect;
const should = require("chai").should();
const fs = require("fs");
const chaiHttp = require("chai-http");
const {urlApi} = require('../helper/config');
const {getLoginToken} = require('../helper/auth');
//const location = require('.')
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
   
    it("kita test post change profile", done => {
      console.log(token2);
      let body = {
        
      };

      chai
        .request(urlApi)
        .post('/user/change-profile')
        .field('Content-Type', 'multipart/form-data')
        .field('fullname', 'aaaa')
        .field('phone', '123')
        .attach('profile_image', './test/public/image/bannes.jpg')
        .set('Authorization', token2) 
        //.send(body)
        //.set('Content-Type','image/jpeg')
                .end((err, res) => {
                    //expect(res.body[0].location).to.include('/bannes.jpg')
                    // should.equal(err, null);
                    // res.status.should.equal(200);
                    // res.should.be.json;
                    console.log(res.status);
                    console.log(err);
                });
                // .catch((err, res) => {
                //     //expect(res.body[0].location).to.include('/bannes.jpg')
                //     // should.equal(err, null);
                //     res.status.should.equal(200);
                //     res.should.be.json;
                //     console.log(res);
                //     console.log(err);
                // });
      done();
    });
    
});
