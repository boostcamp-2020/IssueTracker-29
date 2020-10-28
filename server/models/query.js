module.exports = {
  CREATE_COMMENT: 'insert into comment(contents, issue_id, user_id) values(?, ?, ?);',
  READ_COMMENT: 'select id, contents from comment where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMEN: 'delete from comment where id = ?;',

  READ_ALL_ISSUE: 'select id, title, contents, is_open, user_id, milestone_id from issue',
  CREATE_ISSUE: 'insert into issue(title, contents, is_open, user_id, milestone_id) values(?, ?, ?, ?, ?);',

  READ_ISSUE_BY_ID: 'select id, title, contents, is_open, user_id from issue where id = ?;',
  UPDATE_ISSUE: 'update issue set title = ?, contents = ?, is_open = ? where id = ?;',
  DELETE_ISSUE: 'delete from issue where id = ?;',
  TOGGLE_ISSUE_STATE: 'update issue set isOpen = ? where id = ?;',

  READ_MILESTONE: `select id, title, due_date, description, (select count(*) from milestone where is_open=1) as openCount, (select count(*) from milestone where is_open=0) as closeCount
  from milestone where is_open = ?;`,
  CREATE_MILESTONE: 'insert into milestone(title, due_date, description, is_open, user_id) values(?, ?, ?, ?, ?);',
  UPDATE_MILESTONE: 'update milestone set title = ?, due_date = ?, description = ? where id = ?;',
  DELETE_MILESTONE: 'delete from milestone where id = ?;',

  READ_ISSUE_BY_MILESTONE: `select id, title, contents, user_id, (select count(*) from issue where is_open=1 AND milestone_id = ?) as openCount, (select count(*) from issue where is_open=0 AND milestone_id = ?) as closeCount
  from issue where milestoneid = ? AND is_open = 1`,
  CREATE_ISSUE_BY_MILESTONE: 'insert into issue(title, contents, is_open, user_id, milestone_id) value(?, ?, ?, ?, ?)',
}
