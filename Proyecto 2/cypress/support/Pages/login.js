class loginPage {
    
    constructor(){
        this.selectEmail = `#input-email`;
        this.selectPassword = `#input-password`;
        this.buttomLogin = `.appearance-filled`;
    }

    // Metodo para hacer login
    makeLogin = (email, password) => {
        cy.get(this.selectEmail).type(email);
        cy.get(this.selectPassword).type(password);
        cy.get(this.buttomLogin).click();
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new loginPage();
