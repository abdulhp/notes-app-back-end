/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('collaborations', {
    id: {
      type: 'varchar(50)',
      primaryKey: true,
    },
    note_id: {
      type: 'varchar(50)',
      notNull: true,
    },
    user_id: {
      type: 'varchar(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('collaborations', 'unique_note_id_and_user_id', 'unique(note_id, user_id)');
  pgm.addConstraint('collaborations', 'fk_collaborations.note_id_notes.id', 'foreign key(note_id) references notes(id) on delete cascade');
  pgm.addConstraint('collaborations', 'fk_collaborations.user_id_users.id', 'foreign key(user_id) references users(id) on delete cascade');
};

exports.down = (pgm) => {
  pgm.dropTable('collaborations');
};
