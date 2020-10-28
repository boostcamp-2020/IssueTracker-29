module.exports = {
  CREATE_COMMENT: 'insert into comment(contents, issue_id, user_id) values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMEN: 'delete from comment where id = ?;',

  READ_MILESTONE: `select id, title, due_date, description (select count(*) from milestone where is_open=1) as openCount, (select count(*) from milestone where is_open=0) as closeCount
  from milestone where is_open = ?;`,
  CREATE_MILESTONE: 'insert into milestone(title, due_date, description, is_open, user_id) values(?, ?, ?, ?, ?);',
  UPDATE_MILESTONE: 'update milestone set title = ?, due_date = ?, description = ? where id = ?;',
  DELETE_MILESTONE: 'delete from milestone where id = ?;',
}
