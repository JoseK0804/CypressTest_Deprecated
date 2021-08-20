class nuevaCompañiaPage {
    
    constructor(){
        this.sideBar = `.sidebar-toggle > nb-icon > .eva`;
        this.inputSearch = `#mat-input-0`;
        this.buttomUpdateCompany = `.ng-star-inserted > .text-center > .cdk-focused > .mat-button-wrapper > .mat-icon`;
    }

    // Metodo para cerrar el SideBar
    closeSidebar = () => {
        cy.get(this.sideBar).click();
    }

   // Metodo para hacer una busqueda
   searchCompany = (nameCompany) => {
        cy.get(this.inputSearch).type(nameCompany).type('{enter}');
    }    

    // Metodo para editar una compañia
    selectCompany = () => {
        cy.get(this.buttomUpdateCompany).click();
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new nuevaCompañiaPage();
