// Importar las paginas
import loginPage from "../support/Pages/login";
import homePage from "../support/Pages/home";
import newCompanyPage from "../support/Pages/nuevaCompañia";
import listadoCompanyPage from "../support/Pages/listadoCompañia";

describe(`Test_001`, ()=> {
    // Se ejecuta antes de todas las pruebas
    before(()=> {
        cy.log(`Empiezan los test`);
    })

    // Se ejecuta despues de todas las pruebas
    after(()=> {
        cy.log(`Terminaron todos los test`);
    })

    // Se ejecuta antes de cada prueba
    beforeEach(()=> {
        cy.log(`Empezo el test`);
        cy.viewport(1000, 660);
        cy.visit(`/`);
    })

    // Se ejecuta despues de todas las pruebas
    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    // Primer test cargar datos basicos
    it(`Test_001`, ()=> {
        // Metodo para iniciar sesion
        loginPage.makeLogin(`Admin`, `Admin`);
        // Metodo para entrar en Nueva compañia
        homePage.nuevaCompañia();
        // Metodo para cerrar el modal
        newCompanyPage.closeSidebar();
        // Metodo para llenar el formulario
        newCompanyPage.compelteForm(`Company test`, `Screenshot_1.png`)
    });

    // Segundo test ir a listado de compañia y hacer una busqueda
    it(`Test_002`, ()=> {
        // Metodo para iniciar sesion
        loginPage.makeLogin(`Admin`, `Admin`);
        // Metodo para entrar en Nueva compañia
        homePage.listadoCompañia();
        // Metodo para cerrar el modal
        listadoCompanyPage.closeSidebar();
        // Metodo para hacer una busqueda
        listadoCompanyPage.searchCompany(`Sidesys`) 
    });
    // Tercer test ir a listado de compañia y editar la primera company
    it(`Test_003`, ()=> {
        // Metodo para iniciar sesion
        loginPage.makeLogin(`Admin`, `Admin`);
        // Metodo para entrar en Nueva compañia
        homePage.listadoCompañia();
        // Metodo para cerrar el modal
        listadoCompanyPage.closeSidebar();
        // Metodo para hacer una busqueda
        // listadoCompanyPage.selectCompany();
    });
})
