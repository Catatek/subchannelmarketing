const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

var api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/memberList", (req, res) => {
  axios
    .get(`/lists/${list_id}/members`)
    .then(function(results) {
      res.json(results);
      console.log(results);
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.post("/api/memberSave", (req, res) => {
  const { body } = req;
  return axios
    .request({
      url: `http://us12.api.mailchimp.com/3.0/lists/1f50f3aeaf/members`,
      method: "post",
      data: body,
      auth: {
        username: "anystring",
        password: ""
      }
    })
    .then(response => {
      if (response.status === 200) {
        return res.status(200).json({ message: "user successfully added" });
      }
    })
    .catch(({ response: { data } }) => {
      return res.status(data.status).json(data);
    });
});

const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
