
class NoteComponent extends Component {

    template = `<div class="note">
                    <div class="title">
                    </div>
                    <div class="description">
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <div class="left">
                                <button class="icon notificacao"></button>
                            </div>
                            <div class="rigth">
                                <button class="icon image"></button>
                                <button class="icon lixeira"></button>
                                <button class="icon outros"></button>
                            </div>
                        </div>
                    </div>
                </div>`;

    constructor(note) {
        super();
        this.create();
        this.note = note;
    }

    build() {
        this.append('.title', `<strong>${this.note.title}</strong>`);
        this.append('.description', this.note.description);

        this.click('.notificacao', function() {
            alert(`notificacao`);
        });
        this.click('.image', function() {
            alert(`image`);
        });
        this.click('.lixeira', function() {
            alert(`lixeira`);
        });
        this.click('.outros', function() {
            alert(`outros`);
        });
        this.click('.note', function() {
            alert(`note`);
        });
        return super.build();
    }
    
}