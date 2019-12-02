describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  //new test
  it ('opens with Fall CS courses', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'PlayOurSong');
  });

  it('Generate Playlist works', () => {
    cy.visit ('/');
    cy.get('[data-cy=generate]').click();
    cy.get('[data-cy=title]').should('contain' ,'test');
  });
});