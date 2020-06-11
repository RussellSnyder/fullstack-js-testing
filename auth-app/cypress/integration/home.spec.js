import cySelect from '../utils/cySelect'

describe('the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display the site title', () => {
    cy.get(cySelect('home-page-title')).should('contain', 'FULLSTACK-JS MERN STARTER')
  })
  
  it('should have sign in and join now buttons', () => {
    cy.get(cySelect('topbar-button-sign-in')).should('contain', 'Sign In')
    cy.get(cySelect('topbar-button-join-now')).should('contain', 'Join Now')
  })

  it('should navigate to sign in page', () => {
    cy.get(cySelect('topbar-button-sign-in')).click()
    cy.url().should('contain', 'auth/login')
  })

  it('should navigate to the register page', () => {
    cy.get(cySelect('topbar-button-join-now')).click()
    cy.url().should('contain', 'auth/register')
  })
})