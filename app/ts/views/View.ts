abstract class View<T> {

    protected _elemento: JQuery;

    constructor(seletor:string) {
        
        this._elemento = $(seletor);
    }

    update(model: T) {

        this._elemento.html(this.template(model));

    }

    abstract template(model: T): string;
    /* fazendo isso, as classes filhas serao obrigadas a implementar 
    o metodo template */
}