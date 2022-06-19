var express = require('express');
var router = express.Router();

/* 홈페이지 기본주소 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//모든 사용자 대상 채팅
//호출주소형식: http://localhost:3000/chat
router.get('/chat', function(req, res, next) {
  res.render('chat');
});



//그룹 채팅-지정채팅방 기반 채팅
//호출주소형식: http://localhost:3000/groupchat
router.get('/groupchat', function(req, res, next) {
  res.render('groupchat');
});



module.exports = router;
