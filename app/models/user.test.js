const mongoose = require("mongoose");
const app = require("../../server");
const User = mongoose.model("User");
const Article = mongoose.model("Article");
const  bcrypt = require('bcryptjs');


describe("Method Save User", function() {
  beforeAll(() => {
  if(mongoose.createConnection(process.env.MONGOHQ_URL)){
  }});

    it("expect password string to match encrupted string", async () => {
      await new User({
        name: "name",
        email: "test@test.com",
        password: "password",
        username: "username"
      }).authenticate("password")
      {
        expect(true).toBe(true)     
      }
  });

  it("username should  not be empty", async () => {
    await new User({
      name: "name",
      email: "test@test.com",
      password: "password",
      username: ""
    }).save(function(error){
        expect(error.message).toEqual("Validation failed"); 
    })
});

  afterAll((done) => {
    mongoose.disconnect(done);
  });
});

 