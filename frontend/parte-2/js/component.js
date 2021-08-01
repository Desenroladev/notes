
class Component {

    create() {
        let div = document.createElement('div');
        div.innerHTML = this.template;
        this.element = div
        return this.element;
    }

    qs(selector) {
        return this.element.querySelector(selector);
    }

    append(selector, content) {
        let aux = this.qs(selector);
        aux.innerHTML = content;
        return aux;
    }

    click(selector, callback) {
        this.qs(selector)
            .addEventListener('click', function(evt) {
                evt.stopPropagation();
                evt.preventDefault();
                callback(evt);
            });
    }

    build() {
        return this.element.firstChild;
    }

}
