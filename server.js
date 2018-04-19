const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

var api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, ".", "build")));

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
  body.email_address = req.body.email;
  delete body.email;
  console.log(body);
  axios
    .request({
      url: `http://us12.api.mailchimp.com/3.0/lists/1f50f3aeaf/members`,
      method: "post",
      data: body,
      auth: {
        username: "anystring",
        password: "24ee59971670a3ecf8c3e75a096bbb11-us12"
      }
    })
    .then(response => {
      if (response.status === 200) {
        res.status(200).json({ message: "user successfully added" });
      }
    })
    .catch(({ response: { data } }) => {
      res.status(data.status).json(data);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express app listening on port ${port}`);
