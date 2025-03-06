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


it.only("Atlanta airport", () => {
  cy.visit("https://apps.atl.com/Passenger/FlightInfo/Search.aspx?FIDSType=&SearchAirline=&SearchFlight=&SearchCity=")
    
  cy.get('table > tbody > tr ')
    .map("innerText")
    .then(flights => {
      //get the index of 'Amsterdam' in the array
      const index = flights.findIndex((flight: string) => flight.includes('Amsterdam'))
      cy.log('Index of Amsterdam: ' + index)
      cy.log(JSON.stringify(flights[index]))
    })
})