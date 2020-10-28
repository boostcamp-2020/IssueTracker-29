module.exports = {
  CREATE_COMMENT: 'insert into comment(contents, issue_id, user_id) values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMENT: 'delete from comment where id = ?;',
  CREATE_USER: 'insert into user(is_auth, username, password) values(?, ?, ?);',
  READ_USER: 'select id, is_auth, username, password from user where username = ?;',
}
