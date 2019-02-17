const inputSelector = 'input[name="ftsAutocomplete"]'
describe('Search Widget', function(){
    it('Opens the rental cars homepage', function(){
        cy.visit('http://localhost:8010')
    })
    it('Should show a Search Widget', function(){
        cy.contains('Where are you going?')
    })
    it('Should show a text box labelled Pick-up Location', function(){
        cy.contains('Pick-up Location')
    })
    it('Should have placeholder text with city, airport, station, region, district…', function(){
        cy.get(inputSelector).should('have.attr', 'placeholder', 'city, airport, station, region, district…')
    })
    it('Should have aria for accessibility', function(){
        cy.get(inputSelector).should('have.attr', 'aria-required', 'true')
    })
    it('Does not show results when 1 key is input', function(){
        cy.get(inputSelector).type('m').then(function(){
            cy.get('#results').find('li').should('not.exist')
        })
        cy.get(inputSelector).clear()
    })
    it('Shows search results when 2 or more keys are input', function(){
        cy.get(inputSelector).type('ma').then(function(){
            cy.get('#results').find('li').its('length').should('be.gte',2)
        })
        cy.get(inputSelector).clear()
    })
    it('Displays no results found with no results', function(){
        cy.get(inputSelector).type('//').then(function(){
            cy.get('li').contains('No results found').should('exist')
        })
        cy.get(inputSelector).clear()
    })
    it('Removes results when input is manually deleted', function(){
        cy.get(inputSelector).type('ma{backspace}{backspace}').then(function(){
            cy.get('li').should('not.exist')
        })
    })
})
