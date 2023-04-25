class NotesService {
    constructor() {
        this._notes = [];
    }

    addNote({title, body, tags}) {
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
        
        const newNote = {
            title, tags, body, id, createdAt, updatedAt
        }

        this._notes.push(newNote);

        const isSuccess = this._notes.filter((note) => note.id === id).length > 0;

        if(!isSuccess) {
            throw new Error('Catatan gagal ditambahkan');
        }

        return id;
    }

    getNotes() {
        return this._notes;
    }

    getNoteById(id) {
        const note = this._notes.filter((note) => note.id === id)[0];
        if(!note) {
            throw new Error('Catatan tidak ditemukan');
        }

        return note;
    }
}