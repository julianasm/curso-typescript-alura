abstract class View<T> {

    protected _elemento: Element;

    constructor(seletor:string) {
        
        this._elemento = document.querySelector(seletor);
    }

    update(model: T) {

        this._elemento.innerHTML = this.template(model)

    }

    abstract template(model: T): string;
    /* fazendo isso, as classes filhas serao obrigadas a implementar 
    o metodo template */
}