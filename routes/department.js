const express = require("express");
const Router = express.Router();

const department = require("../data/department");
const data = department.cachedContents.data;

//Get, post, and delete on main route
Router.route("/")
  .get((req, res) => {
    let employee = req.query["employee"];
    if (employee) {
      let arr = [];
     
      data.forEach((dept) => {
        if (Number(dept.count) > Number(employee)) {
          arr.push(dept);
        }
      });
      arr.push(data[0]);

      res.json(arr);
    } else res.json(department);
  })
  .post((req, res) => {
    if (req.body.item && req.body.name) {
      const dept = {
        name: req.body.name,
        item: req.body.item,
        count: req.body.count || null,
      };
      data.push(dept);
      res.json(data);
    } else res.json({ error: "Insufficient Data" });
  })
  .delete((req, res) => {
    if (req.body.name || req.body.item) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].name==(req.body.name) >=0 || req.body.item == data[index].item) {
          data.splice(index, 1);
          res.json(data);
        }
      }
    }
  }).patch((req, res) => {
   
    if (req.body.name || req.body.item){

    if (data.findIndex((d) => d.item) >= 0) {
      console.log(data.findIndex(d=>d.item));
      for (let index = 0; index < data.length; index++) {
        if (data[index].name==(req.body.name) >=0 || req.body.item == data[index].item) {
          data[index].item = req.body.item;
          data[index].name = req.body.name;
          data[index].count = req.body.count || null;
        }
      }
    }
  }
    res.json(data);
  });
 
  



module.exports = Router;
