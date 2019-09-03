    //Hide results
//     document.getElementById('results').style.display='none';
    
//     //Show loader
//     document.getElementById('loading').style.display='block';
  
//     setTimeout(calculateResults, 2000);
  
//     e.preventDefault();
//   });

// sbutton = document.querySelector('#loan-form');

// if(sbutton){


// addEventListener('submit',calculateResults);

// }

document.querySelector('#loan-form').addEventListener('submit',calculateResults); 

function calculateResults(e){

    const amount = document.querySelector('#amount').value;
    const interest = document.querySelector('#interest').value;
    const years = document.querySelector('#years').value;

    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const principal = parseFloat(amount);
    const calculatedinterest = parseFloat(interest)/100/12;
    const calculatedpayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedinterest,calculatedpayments);
    const monthly = (principal*x*calculatedinterest)/(x-1);

    console.log('1st test');

    if(isFinite(monthly)) {

        console.log('2-test');

        console.log(monthly);

        monthlypayment.value = monthly.toFixed(2);                                    //code not working at below three lines
        totalpayment.value = (monthly * calculatedpayments).toFixed(2);
        totalinterest.value = ((monthly * calculatedpayments)-principal).toFixed(2);

        console.log(totalpayment);

        document.getElementById('results').style.display='block';
        //hide loader
        // document.getElementById('loading').style.display='none';

        }  else {

               showError('please check your number!');

        }


            e.preventDefault();


}

function showError(error){

    console.log('test3');


    const errorDiv = document.createElement('div');

    const Card = document.querySelector('.card');

    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.append(document.createTextNode(error));

    Card.insertBefore(errorDiv,heading);

    // function clear error after 3 seconds


    setTimeout(clearError,3000);
}

function clearError(){

    document.querySelector('.alert').remove();
}


