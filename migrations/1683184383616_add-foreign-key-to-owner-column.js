/* eslint-disable camelcase */

exports.up = (pgm) => {
  const created_at = new Date().toISOString();

  pgm.sql(`insert into users(id, username, password, fullname, created_at, updated_at) values ('old_notes', 'old_notes', 'old_notes', 'old_notes', '${created_at}', '${created_at}')`);

  pgm.sql("update notes set owner = 'old_notes' where owner is null");

  pgm.addConstraint('notes', 'fk_notes.owner_users.id', 'foreign key(owner) references users(id)');
};

exports.down = (pgm) => {
  pgm.dropConstraint('notes', 'fk_notes.owner_users.id');

  pgm.sql("update notes set owner = null where owner = 'old_notes'");

  pgm.sql("delete from users where id = 'old_notes'");
};
