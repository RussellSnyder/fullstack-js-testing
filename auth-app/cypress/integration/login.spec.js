import cySelect from '../utils/cySelect'

const loginSelect = (id) => cySelect(`login-${id}`)
const topBarSelect = (id) => cySelect(`topbar-${id}`)

describe('the login process', () => {
  before(() => {
    cy.server()

    cy.fixture('user').as('user');

    cy.route('POST', 'api/v1/auth/login', '@user')

    cy.visit('/auth/login')
  })

  it('should join a user, flash a message and redirect to the home page', () => {
    cy.get(loginSelect('email')).type('doctor@whatever.com')
    cy.get(loginSelect('password')).type('pastaword')
    cy.get(loginSelect('sign-in')).click()

    cy.get(topBarSelect('confirm-email')).should('contain', "Please confirm your email address.")
    cy.get(topBarSelect('auth-username')).should('contain', "Hey, doctor")
    cy.get(topBarSelect('auth-logout')).should('contain', "Logout")
  })
  
})