
class NotesComponent extends Component {

    constructor(element:any, notes:any[]) {
        super();
        this.create();
        this.element = element;

        if(notes && Array.isArray(notes)) {
            notes.forEach(note => {
                this.add(new NoteComponent(note));
            });
        }
    }

    add(note:NoteComponent) {
        this.element.appendChild(note.build());
    }

}
