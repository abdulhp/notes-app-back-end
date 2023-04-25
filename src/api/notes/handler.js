/* eslint-disable no-underscore-dangle */
class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', body, tags } = request.payload;

      const noteId = this._service.addNote({ title, body, tags });

      return h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId,
        },
      });
    } catch (error) {
      return h.response({
        status: 'fail',
        message: error.message,
      }).code(400);
    }
  }

  getNotesHandler() {

  }

  getNoteByIdHandler() {

  }

  putNoteByIdHandler() {

  }

  deleteNoteByIdHandler() {

  }
}
