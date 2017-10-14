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
    //通过四个id进行查找
    getAllSubjects(did,sid,eid,tid){
       var sql = "select * from tbl_exam_subject where department_id="
       +did+" and subjectType_id="
       +sid+" and subjectLevel_id="
       +eid+" and topic_id="+tid;
      return pool.execute(sql);
    },

    //通过id删除题目
    delSubject(id){
      var sql="delete from tbl_exam_subject where id="+id;
      return pool.execute(sql);
    },
    //通过id的修改checkState中的值
    checkSubject(id,value){
      var sql="update  tbl_exam_subject set checkState='"+value+"' where id="+id;
      return pool.execute(sql);
    },
    //
    checkChoice(id){
      var sql="select * from tbl_exam_choice where subject_id="+id;
      return pool.execute(sql);
    },
    //模糊查詢
    findSubject(keys){
      var sql="select * from tbl_exam_subject where stem like '%"+keys+"%'";
      return pool.execute(sql);
    },


    //添加tbl_exam_subject
    saveSubject(analysis,anwser,checkState="未审核",stem,department_id,subjectLevel_id,subjectType_id,topic_id){
      var sql = "insert into tbl_exam_subject values(null,'"+analysis+"','"
      +anwser.toString()+"','"
      +checkState+"','"
      +stem+"',null,"
      +department_id+","
      +subjectLevel_id+","
      +subjectType_id+","
      +topic_id+",null)";
      return pool.execute(sql);
    },
    //添加tbl_exam_choice
    saveChoice(content,correct,subject_id){
      var sql="insert into tbl_exam_choice values(null,'"
      +content+"',"
      +correct+","
      +subject_id+")";
      return pool.execute(sql);
    }

}
