module.exports = {
  CREATE_COMMENT: 'insert into comment(contents, issue_id, user_id, created_at) values(?, ?, ?, ?);',
  READ_COMMENT: 'select comment.id, comment.contents, comment.created_at, comment.user_id, comment.issue_id, user.username from comment inner join user on comment.user_id = user.id where issue_id = ?;',
  UPDATE_COMMENT: 'update comment set contents = ? where id = ?;',
  DELETE_COMMENT: 'delete from comment where id = ?;',
  
  CREATE_USER: 'insert into user(is_auth, username, profile) values(?, ?, ?);',
  READ_ALL_USER: 'select username, profile from user;',
  READ_USER: 'select id, is_auth, username, password, profile from user where username = ?;',

  CREATE_LABEL: 'insert into label(name, description, color) values(?, ?, ?);',
  READ_LABEL: 'select id, name, description, color from label;',
  UPDATE_LABEL: 'update label set name = ?, description = ?, color = ? where id = ?;',
  DELETE_LABEL: 'delete from label where id = ?;',

  READ_LABEL_IN_ISSUE: 'select label_issue.id, label_issue.label_id, label_issue.issue_id, label.name, label.color from (label_issue join issue on label_issue.issue_id = issue.id) left outer join label on label_issue.label_id = label.id where label_issue.issue_id = ?;',
  CHECK_DUPLICATE_LABEL_IN_ISSUE: 'select id from label_issue where label_id = ? and issue_id = ?;',
  CREATE_LABEL_IN_ISSUE: 'insert into label_issue(label_id, issue_id) values(?, ?);',
  DELETE_LABEL_IN_ISSUE: 'delete from label_issue where label_id = ? and issue_id = ?;',

  READ_ALL_ISSUE: 'select issue.id, issue.title as issue_title, issue.is_open, issue.user_id, changed_at, milestone_id, username, milestone.title as milestone_title from (issue join user on issue.user_id = user.id) left outer join milestone on issue.milestone_id = milestone.id;',
  CREATE_ISSUE: 'insert into issue(title, is_open, user_id, milestone_id, changed_at) values(?, ?, ?, ?, ?);',
  UPDATE_ISSUE_STATE: 'update issue set is_open = ?, changed_at = ? where id in (?);',

  READ_ISSUE_BY_ID: 'select issue.id, issue.title as issue_title, issue.is_open, issue.user_id, changed_at, milestone_id, username, milestone.title as milestone_title from (issue join user on issue.user_id = user.id) left outer join milestone on issue.milestone_id = milestone.id where issue.id = ?',
  UPDATE_ISSUE: 'update issue set title = ? where id = ?;',
  DELETE_ISSUE: 'delete from issue where id = ?;',

  READ_MILESTONE: `select id, title, due_date, description, (select count(*) from milestone where is_open=1) as openCount, (select count(*) from milestone where is_open=0) as closeCount
  from milestone where is_open = ?;`,
  READ_ALL_MILESTONE: 'select title from milestone;',
  CREATE_MILESTONE: 'insert into milestone(title, due_date, description, is_open, user_id) values(?, ?, ?, ?, ?);',
  UPDATE_MILESTONE: 'update milestone set title = ?, due_date = ?, description = ? where id = ?;',
  DELETE_MILESTONE: 'delete from milestone where id = ?;',
  UPDATE_MILESTONE_STATE: 'update milestone set isOpen = ? where id = ?;',

  READ_ALL_ISSUE_LABEL: 'select label_issue.id, label_issue.label_id, label_issue.issue_id, label.name, label.color from label_issue join label on label_issue.label_id = label.id;',
  READ_ISSUE_BY_MILESTONE: `select id, title, contents, user_id, (select count(*) from issue where is_open=1 AND milestone_id = ?) as openCount, (select count(*) from issue where is_open=0 AND milestone_id = ?) as closeCount
  from issue where milestoneid = ? AND is_open = 1;`,
  CREATE_ISSUE_BY_MILESTONE: 'insert into issue(title, contents, is_open, user_id, milestone_id) value(?, ?, ?, ?, ?);',

  CREATE_ASSIGNS: 'insert into assigns(user_id, issue_id) value(?,?);',
  READ_ASSIGNS_BY_ID: 'select id, user_id, issue_id from assigns where issue_id = ?;',
  DELETE_ASSIGNS: 'delete from assigns where id = ?;',
}
