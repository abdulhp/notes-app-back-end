const { 
	addNoteHandler, 
	getAllNotesHandler, 
	editNoteByIdHandler
} = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler,
	},
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotesHandler,
	},
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteByIdHandler
	}
];

module.exports = routes;
