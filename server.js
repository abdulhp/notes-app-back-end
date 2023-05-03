require('dotenv').config();

const Hapi = require('@hapi/hapi');

const notes = require('./src/api/notes');
const NotesService = require('./src/services/postgres/NotesService');
const NotesValidator = require('./src/validator/notes');

const UsersService = require('./src/services/postgres/UsersService');
const users = require('./src/api/users');
const UsersValidator = require('./src/validator/users');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  const notesService = new NotesService();
  const usersService = new UsersService();

  await server.register([
    {
      plugin: notes,
      options: {
        service: notesService,
        validator: NotesValidator,
      },
    },
    {
      plugin: users,
      options: {
        service: usersService,
        validator: UsersValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
