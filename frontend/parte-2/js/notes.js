
class NotesComponent extends Component {

    constructor(element, notes) {
        super();
        this.create();
        this.element = element;

        if(notes && Array.isArray(notes)) {
            notes.forEach(note => {
                this.add(new NoteComponent(note));
            });
        }
    }

    add(note) {
        this.element.appendChild(note.build());
    }

}
