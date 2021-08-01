
class Component {

    template: string =  '';
    element: any;

    create() {
        let div = document.createElement('div');
        div.innerHTML = this.template;
        this.element = div
        return this.element;
    }

    qs(selector:string) {
        return this.element.querySelector(selector);
    }

    append(selector:string, content:string) {
        let aux = this.qs(selector);
        aux.innerHTML = content;
        return aux;
    }

    click(selector:string, callback:any) {
        this.qs(selector)
            .addEventListener('click', (evt:any) => {
                evt.stopPropagation();
                evt.preventDefault();
                callback(evt);
            });
    }

    build() {
        return this.element.firstChild;
    }

}
