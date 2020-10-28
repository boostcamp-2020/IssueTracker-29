module.exports = {
  CREATE_COMMENT: 'insert comment(contents, issue_id, user_id) into values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMENT: 'delete from comment where id = ?;',

  CREATE_LABEL: 'insert into label(name, description, color) values(?, ?, ?);',
  READ_LABEL: 'select name, description, color from label;',
  UPDATE_LABEL: 'update label set name = ?, description = ?, color = ? where id = ?;',
  DELETE_LABEL: 'delete from label where id = ?;',
}
