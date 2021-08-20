class homePage {
    
    constructor(){
        this.sideBarCompañia = `a.ng-tns-c108-0`;
        this.sideBarNuevaCompañia = `a.ng-tns-c108-1`;
        this.sideBarListadoCompañia = `a.ng-tns-c108-2`;
    }

    // Metodo para entrar a nueva compañia
    nuevaCompañia = () => {
        cy.get(this.sideBarCompañia).click();
        cy.get(this.sideBarNuevaCompañia).click();
    }

    // Metodo para entrar a listado de compañia
    listadoCompañia = () => {
        cy.get(this.sideBarCompañia).click();
        cy.get(this.sideBarListadoCompañia).click();
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new homePage();
