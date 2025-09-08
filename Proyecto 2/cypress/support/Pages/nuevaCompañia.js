class nuevaCompañiaPage {
    
    constructor(){
        this.sideBar = `.sidebar-toggle > nb-icon > .eva`;
        this.inputNameCompany = `#mat-input-0`;
        this.selectRegion = `.mat-select-placeholder`;
        this.selectRegionAr = `#mat-option-2 > .mat-option-text`;
        this.selectCategory = `#mat-select-value-1`;
        this.selectCategoryService = `#mat-option-3`;
        this.logo = `#company-form > .row > .col-md-5 > .input-group > #avatar`;
        this.buttomNewCompany = `:nth-child(3) > .btn-sidesys`;
    }

    // Metodo para cerrar el SideBar
    closeSidebar = () => {
        cy.get(this.sideBar).click();
    }

    // Metodo para llenar el formulario
    compelteForm = (nameCompany, image) => {
        cy.get(this.inputNameCompany).type(nameCompany);
        cy.get(this.selectRegion).click();
        cy.get(this.selectRegionAr).click();
        cy.get(this.selectCategory).click();
        cy.get(this.selectCategoryService).click();
        cy.get(this.logo).attachFile(image);
        cy.get(this.buttomNewCompany).click();
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new nuevaCompañiaPage();
