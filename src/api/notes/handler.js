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
    const notes = this._service.getNotes();
    return {
      status: 'success',
      data: {
        notes,
      },
    };
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteByIdHandler(id);
      return {
        status: 'success',
        data: {
          note,
        },
      };
    } catch (error) {
      return h.response({
        status: 'fail',
        message: error.message,
      }).code(404);
    }
  }

  putNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;

      this._service.editNoteById(id, request.payload);

      return {
        status: 'success',
        message: 'Catatan berhasil di perbarui',
      };
    } catch (error) {
      return h.response({
        status: 'fail',
        message: error.message,
      }).code(404);
    }
  }

  deleteNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;

      this._service.deleteNoteByIdHandler(id);

      return {
        status: 'success',
        message: 'Catatan berhasil dihapus',
      };
    } catch (error) {
      return h.response({
        status: 'fail',
        message: error.message,
      }).code(404);
    }
  }
}

module.exports = NotesHandler;
