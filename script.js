const btnOne=document.querySelector('.btnOne');
const btnTwo=document.querySelector('.btnTwo');
const text=document.querySelector('#text');
const containerDeposit=document.querySelector('.containerDeposit');
const containerLoan=document.querySelector('.containerLoan');
const containerMortgage=document.querySelector('.containerMortgage');
btnOne.addEventListener('click', deposit);

function deposit(){
    
    text.innerHTML='Here you can calculate your profit';
    containerDeposit.style='display:block';
    btnOne.innerHTML='Start over';
    btnTwo.style='display:none';
    btnOne.addEventListener('click', reload);

    const btnDeposit=document.querySelector('.btnDeposit');
    btnDeposit.addEventListener('click', calculateDeposit);
    function calculateDeposit(e){
        e.preventDefault();
        const deposit=Number(document.querySelector('.deposit').value);
        const depositTerms=Number(document.querySelector('.depositterms').value);
        const interestDeposit=Number(document.querySelector('.interestDeposit').value);
          let term=(depositTerms*30)/365;
          let yearlyProfit=(deposit*interestDeposit*term)/100;
          yearlyProfit=yearlyProfit.toFixed(2);

          document.querySelector('.yearlyprofit').textContent=yearlyProfit;
    }
btnOne.removeEventListener('click', deposit, false);
}

function reload(){
    location.reload();
}

btnTwo.addEventListener('click', credit);

function credit(){
    btnOne.innerHTML='A personal loan';
    btnTwo.innerHTML='A mortgage';
    btnOne.addEventListener('click', loan);
    btnTwo.addEventListener('click', mortgage);
}

function loan(){
    text.innerHTML='Here you can calculate cost of your loan';
    containerDeposit.style='display:none';
    containerLoan.style='display:block';
    btnOne.innerHTML='Start over';
    btnTwo.style='display:none';
    btnOne.addEventListener('click', reload);

    const btnCredit=document.querySelector('.btnCredit');
    btnCredit.addEventListener('click', calculateLoan);

    function calculateLoan(e){
        e.preventDefault();
        const credit=Number(document.querySelector('.credit').value);
        const loantermsCredit=Number(document.querySelector('.loantermsCredit').value);
        const interestCredit=Number(document.querySelector('.interestCredit').value);
        let monthlyInterest=interestCredit/(100*12);
        let formulaMonthly=1+monthlyInterest;
        let procentPeriod=-loantermsCredit;
        let formMonth=Math.pow(formulaMonthly, procentPeriod);
        let buttomFormula= 1-formMonth;
        let monthlyPayment=credit*(monthlyInterest/buttomFormula);
        monthlyPayment=monthlyPayment.toFixed(2);
        let totalLoanPayment=monthlyPayment*loantermsCredit;
        totalLoanPayment=totalLoanPayment.toFixed(2);
        let totalOverLoan=totalLoanPayment-credit;
        totalOverLoan=totalOverLoan.toFixed(2);

        document.querySelector('.monthlypaymentCredit').textContent=monthlyPayment;
        document.querySelector('.totalpaymentCredit').textContent=totalLoanPayment;
        document.querySelector('.totalinterestCredit').textContent=totalOverLoan;
    }
    btnOne.removeEventListener('click', loan);
}

function mortgage(){
    text.innerHTML='Here you can calculate cost of your mortgage';
    containerDeposit.style='display:none';
    containerLoan.style='display:none';
    containerMortgage.style='display:block';
    btnTwo.innerHTML='Start over';
    btnOne.style='display:none';
    btnTwo.addEventListener('click', reload);
    const button=document.querySelector('.btn');
button.addEventListener('click', calculateTotal);


function calculateTotal(e){
    e.preventDefault();
    const costOfCredit=Number(document.querySelector('.realestate').value);
    const downPayment=Number(document.querySelector('.downpayment').value);
    const loanTerms=Number(document.querySelector('.loanterms').value);
    const interest=Number(document.querySelector('.interest').value);
    
        let monthlyInterest=(interest/12)/100;
        let PrecommonInterest=(1+monthlyInterest);
        let commonInterest=Math.pow(PrecommonInterest, loanTerms);
        let totalCostOfCredit=costOfCredit-downPayment;
        let preCalculatingMonthlyPayment=(totalCostOfCredit*monthlyInterest)*commonInterest;
        let commonInterestMinus=commonInterest-1;
        let monthlyPayment=preCalculatingMonthlyPayment/commonInterestMinus;
        monthlyPayment=monthlyPayment.toFixed(2);
        let totalPayment=monthlyPayment*loanTerms;
        totalPayment=totalPayment.toFixed(2);
        let totalOverpay=totalPayment-totalCostOfCredit;
        totalOverpay=totalOverpay.toFixed(2);

        document.querySelector('.monthlypayment').textContent=monthlyPayment
        document.querySelector('.totalpayment').textContent=totalPayment
        document.querySelector('.totalinterest').textContent=totalOverpay
    }

   
    
  
 

}