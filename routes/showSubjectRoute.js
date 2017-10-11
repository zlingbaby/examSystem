require('babel-polyfill');
let express = require('express');
let route = express.Router();
let showSubjectDB = require('../db/showSubjectDB');
let showSubject = require('../model/showSubject')
//查询所有
route.get('/getAllSubjectType',(req,resp)=>{
  showSubjectDB.getAllSubjectType().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/getAllSubjectDepartment',(req,resp)=>{
  showSubjectDB.getAllSubjectDepartment().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/getAllSubjectLevel',(req,resp)=>{
  showSubjectDB.getAllSubjectLevel().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/getAllTopics',(req,resp)=>{
  showSubjectDB.getAllTopics().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/getAllSubjects',(req,resp)=>{
  showSubjectDB.getAllSubjects(req.query.department,req.query.type,req.query.level,req.query.topics).then((data)=>{
    console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//save
route.post('/saveSubject',(req,resp)=>{
  let subject=new Subject();
  Object.assign(subject,req.body);
  showSubjectDB.saveSubject(subject).then((data)=>{
    console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//update
route.post("/checkSubject",(req,resp)=>{
  // let subject=new Subject();
  // Object.assign(subject,req.body);
  var id=req.body.id;
  var checkState=req.body.checkState;
  console.log(id);
  showSubjectDB.checkSubject(id,checkState).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//delete
route.post('/delSubject',(req,resp)=>{
  showSubjectDB.delSubject(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;