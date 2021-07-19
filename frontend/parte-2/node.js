
class NodeComponent extends Component {

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

    constructor(model) {
        super();
        this.compile();
        this.model = model;
    }

    render() {
        this.appendByClass('title', `<strong>${this.model.title}</strong>`);
        this.appendByClass('description', this.model.description);

        this.addClickByClass('notificacao', function() {
            alert(`notificacao`);
        });
        this.addClickByClass('image', function() {
            alert(`image`);
        });
        this.addClickByClass('lixeira', function() {
            alert(`lixeira`);
        });
        this.addClickByClass('outros', function() {
            alert(`outros`);
        });
        this.addClickByClass('note', function() {
            alert(`note`);
        });
        return this.element.firstChild;
    }
    
}

let model = {
    title: 'Desvendando o Java Script', 
    description: 'Agora vc aprende java script'
};
let aux = new NodeComponent(model);

document.getElementById('notes1').appendChild(aux.render());

