module.exports = {
  CREATE_COMMENT: 'insert comment(contents, issue_id, user_id) into values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMEN: 'delete from comment where id = ?;',

  READ_MILESTONE: 'select id, title, due_date, description from milestone where is_open = ?;',
  CREATE_MILESTONE: 'insert milestone(title, due_date, description, is_open, user_id) into values(?, ?, ?, ?, ?);',
  UPDATE_MILESTONE: 'update milestone set title = ?, due_date = ?, description = ? where id = ?;',
  DELETE_MILESTONE: 'delete from milestone where id = ?;',
}
