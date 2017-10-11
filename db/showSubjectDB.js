let pool = require('./pool');
module.exports = {  
    getAllSubjectType(){
      var sql = "select * from tbl_exam_subjecttype";
      return pool.execute(sql);
    },
    getAllSubjectDepartment(){
      var sql = "select * from tbl_exam_epartment";
      return pool.execute(sql);
    },
    getAllSubjectLevel(){
      var sql = "select * from tbl_exam_subjectlevel";
      return pool.execute(sql);
    },
    getAllTopics(){
    	var sql = "select * from tbl_exam_topic";
      return pool.execute(sql);
    },
    getAllSubjects(did,sid,eid,tid){
       var sql = "select * from tbl_exam_subject where department_id="
       +did+" and subjectType_id="
       +sid+" and subjectLevel_id="
       +eid+" and topic_id="+tid;
      return pool.execute(sql);
    },
    saveSubject(subject){
      var sql = "insert into tbl_exam_subject values(null,'"
      +subject.analysis+"','"
      +subject.answer+"','"
      +subject.stem+"',"
      +subject.topic_id+",'"
      +subject.department_id+",'"
      +subject.subjectLevel_id+",'"
      +subject.subjectType+"')";
      return pool.execute(sql);
    },
    delSubject(id){
      var sql="delete from tbl_exam_subject where id="+id;
      return pool.execute(sql);
    },
    checkSubject(id,value){
      var sql="update  tbl_exam_subject set checkState='"+value+"' where id="+id;
      return pool.execute(sql);
    }
}
