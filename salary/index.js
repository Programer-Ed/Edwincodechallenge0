//function calculateNetSalary calculates monthly salary
    function calculateNetSalary(basicSalary,benefits){

//basicSalary is the initial salary without tax,benefits are the reliefs offered
        const calcTax = function tax(paye){
        //Calculates paye with tax rate in a month
         if(paye>=24000){
            return paye * 0.1//0.1=10%
         }else if(paye>=24001 && paye<=32333){
            return 24000 * 0.1 + //
            0.25 * (paye - 32333)
         }else if(paye>=32334 && paye<=500000){
             return 24000 * 0.1 + 
             8332 * 0.25 + //8332 is the difference in 32333-24001
             0.3 * (paye - 32334)
         }else if(paye>=500001 && paye<=800000){
             return 24000 * 0.1 +
              467666 * 0.3 +
              8332 * 0.25 +
              0.325 * (paye - 500000)
         }else if(paye<=800001){
             return 24000 * 0.1 +
              299999 * 0.325 +
              467666 * 0.3 +
              8332 * 0.25 +
              0.35 * (paye - 800000)
         }
        }

     const calcNhif = function calculateNhif(nhifRates){
        //calculates NHIF according to the monthly rate
        if(nhifRates<=5900){
            return  150
        }else if(nhifRates>=6000 && nhifRates<=7999){
            return  300
        }else if(nhifRates>=8000 && nhifRates<=11999){
            return  400
        }else if(nhifRates>=12000 && nhifRates<=14999){
            return  500
        }else if(nhifRates>=15000 && nhifRates<=19999){
            return   600
        }else if(nhifRates>=20000 && nhifRates<=24999){
            return  750
        }else if(nhifRates>=25000 && nhifRates<=29999){
            return 850
        }else if(nhifRates>=30000 && nhifRates<=34999){
            return 900
        }else if(nhifRates>=35000 && nhifRates<=39999){
            return 950
        }else if(nhifRates>=40000 && nhifRates<=44999){
            return 1000
        }else if(nhifRates>=45000 && nhifRates<=49999){
            return 1100
        }else if(nhifRates>=50000 && nhifRates<=59999){
            return 1200
        }else if(nhifRates>=60000 && nhifRates<=69999){
            return 1300
        }else if(nhifRates>=70000 && nhifRates<=79999){
            return 1400
        }else if(nhifRates>=80000 && nhifRates<=89999){
            return 1500
        }else if(nhifRates>=90000 && nhifRates<=99999){
            return 1600
        }else if(nhifRates>=100000){
            return 1700
        }
     }   

     
     const perRelief = 2400;//personal relief given
     
     
     const nssf1 = (7000 * 0.06);//nssf1 represents Tier I
     
     const nssf2 = (36000-7000)* 0.06;//nssf2 represents Tier II
     
     const grossSalary= basicSalary + benefits;//initial salary + benefits
     
     const calculateNhif = calcNhif(grossSalary);
     
     const insRelief = (calculateNhif * 0.15);//insurance relief
     
     const housingLevy =( grossSalary* 0.015);
     
     const housRelief = (housingLevy * 0.15);
     
     const tax = calcTax(grossSalary);

     
     const netSalary= grossSalary - tax - calculateNhif - nssf1 - nssf2 - housingLevy + insRelief + perRelief + housRelief;

     return{grossSalary, tax, netSalary, calculateNhif, nssf1, nssf2};//will display
    }

     const basicSalary = 6000000;

     const benefits = 500000;

     const salary = calculateNetSalary(basicSalary,benefits)
     
     console.log("Gross Salary:", salary.grossSalary);
     
     console.log("tax:", salary.tax);
     
     console.log("Nssf Deductions1:", salary.nssf1);
     
     console.log("Nssf Deductions2:", salary.nssf2);
     
     console.log("Nhif Deductions:", salary.calculateNhif);
     
     console.log("Net Salary:", salary.netSalary);
