const express = require("express");
const Mailchimp = require("mailchimp-api-v3");

require("dotenv").config();

var api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;
const app = express();
const mailchimp = new Mailchimp(api_key);

app.get("/api/memberList", (req, res) => {
  mailchimp
    .get(`/lists/${list_id}/members`)
    .then(function(results) {
      res.json(results);
      console.log(results);
    })
    .catch(function(err) {
      res.send(err);
    });
});

const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
