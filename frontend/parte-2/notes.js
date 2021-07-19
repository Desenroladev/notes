
class NotesComponent extends Component {

    constructor(element, notes) {
        super();
        this.compile();

        if(notes && Array.isArray(notes)) {
            notes.forEach(note => {
                this.add(note);
            });
        }
    }

    add(note) {
        this.element.appendChild(note.render());
    }

    render() {
        return this.element.firstChild;
    }

}