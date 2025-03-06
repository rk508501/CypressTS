it("Verify the flight statuses", () => {
  cy.visit("http://127.0.0.1:5500/cypress/html/sample_airline_table.html");

  cy.get(".table > tbody > tr > td:nth-child(4)")
    .map("innerText")
    .then(statuses =>{
     statuses.forEach((status: string) => {
       expect(status.toLowerCase()).to.eq('on-time')
     })
    })
});
