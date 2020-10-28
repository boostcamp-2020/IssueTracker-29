module.exports = {
  CREATE_COMMENT: 'insert comment(contents, issue_id, user_id) into values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMEN: 'delete from comment where id = ?;',

  READ_ALL_ISSUE: 'select * from issue',
  CREATE_ISSUE: 'insert into issue(title, contents, is_open, user_id, milestone_id) values(?, ?, ?, ?, ?);',

  READ_ISSUE_BY_ID: 'select * from issue where id = ?;',
  UPDATE_ISSUE: 'update issue set title = ?, contents = ?, is_open = ? where id = ?;',
  DELETE_ISSUE: 'delete from issue where id = ?;',
}
