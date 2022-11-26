// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase()
    return customerName;
}
function setBestCustomer(){
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = "";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'test'
}






//describe('Fix the Scope', function() {
 //   describe('declare customerName to be bob in global scope', function() {
 //     it('returns the customerName', function() {
 //       expect(window.customerName).to.equal('bob');
 //     });
 //   });
  
 //   describe('upperCaseCustomerName()', function() {
 //     it('modifies the customerName variable', function() {
 //       expect(window.customerName).to.equal('bob');
  
 //       upperCaseCustomerName();
  
 //       expect(window.customerName).to.equal('BOB');
 //     });
//    });