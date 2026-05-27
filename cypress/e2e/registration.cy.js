describe('Registration functionality', () => {

  const uniqueEmail = `ludmila${Date.now()}@gmail.com`
  const password = 'Password123'

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  })

  it('Should register new user', () => {

    cy.contains('button', 'Sign In').click()

    cy.contains('Registration').click()

    cy.get('#signupName')
      .type('Ludmila')

    cy.get('#signupLastName')
      .type('Cheredniuk')

    cy.get('#signupEmail')
      .type(uniqueEmail)

    cy.get('#signupPassword')
      .type(password, { sensitive: true })

    cy.get('#signupRepeatPassword')
      .type(password, { sensitive: true })

    cy.contains('button', 'Register')
      .click()

    cy.url()
      .should('include', '/panel')

  })

  it('Should login using custom command', () => {

    cy.login(uniqueEmail, password)

    cy.url()
      .should('include', '/panel')

  })

})