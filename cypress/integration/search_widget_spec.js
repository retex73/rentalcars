describe('Search Widget', function(){
    it('Opens the rental cars homepage', function(){
        cy.visit('http://localhost:8080')
    })
    it('Should show a Search Widget', function(){
        cy.contains('Where are you going?')
    })
    it('Should show a text box labelled Pick-up Location', function(){
        cy.contains('Pick-up Location')
    })
    it('Should have placeholder text with city, airport, station, region, district…', function(){
        cy.get('input[name="ftsAutocomplete"]').should('have.attr', 'placeholder', 'city, airport, station, region, district…')
    })
    it('Should have aria for accessibility', function(){
        cy.get('input[name="ftsAutocomplete"]').should('have.attr', 'aria-required', 'true')
    })
})