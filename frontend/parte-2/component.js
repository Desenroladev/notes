
class Component {

    compile() {
        let div = document.createElement('div');
        div.innerHTML = this.template;
        this.element = div
        return this.element;
    }

    findByClass(className) {
        return this.element.getElementsByClassName(className)[0];
    }

    appendByClass(className, content) {
        let aux = this.findByClass(className);
        aux.innerHTML = content;
        return aux;
    }

    addClickByClass(className, callback) {
        this.findByClass(className).addEventListener('click', function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            callback(evt);
        });
    }

}