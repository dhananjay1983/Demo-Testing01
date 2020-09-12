describe('My First Test', () => {
  it('finds the content "WOMEN"', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.class('sf-with-ul').click

  })
})