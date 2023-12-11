
import {calculatevalue}  from "../src/utils"

test('calculates the value correctly', () => {
    
    const allocatedamount= 250;
    const totalBudgetamount = 5000;
   
    
     const result = calculatevalue(allocatedamount, totalBudgetamount);
   
    expect(result).toBe('5.00');
   });