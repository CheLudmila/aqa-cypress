describe('Header and Footer elements', () => {

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')

    cy.url().should('include', 'qauto.forstudy.space')
  })

  it('check header elements', () => {

    const headerElements = [
      'Home',
      'About',
      'Contacts',
      'Guest log in',
      'Sign In'
    ]

    headerElements.forEach(element => {
      cy.contains(element)
        .should('exist')
        .and('be.visible')
    })

  })

  it('check footer elements', () => {

    cy.scrollTo('bottom')

    const footerElements = [
      'ithillel.ua',
      'support@ithillel.ua',
      '© 2021 Hillel IT school'
    ]

    footerElements.forEach(element => {
      cy.contains(element)
        .should('exist')
        .and('be.visible')
    })

    // соціальні кнопки
    cy.get('.icon-facebook')
      .should('be.visible')

    cy.get('.icon-telegram')
      .should('be.visible')

    cy.get('.icon-youtube')
      .should('be.visible')

    cy.get('.icon-instagram')
      .should('be.visible')

    cy.get('.icon-linkedin')
      .should('be.visible')

  })

})