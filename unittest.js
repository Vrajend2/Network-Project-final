
import {calculatevalue}  from "../src/utils"

test('calculates the value correctly', () => {
    
    const allocatedamount= 370;
    const totalBudgetamount = 5000;
   
    
     const result = calculatevalue(allocatedamount, totalBudgetamount);
   
    expect(result).toBe('7.4');
   });