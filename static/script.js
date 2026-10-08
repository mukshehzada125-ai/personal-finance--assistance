// Select all rows in the finance table
const rows = document.querySelectorAll("tbody tr");


// Run the calculation for every month
rows.forEach(function(row) {

    // Get the input fields
    const salaryInput = row.querySelector(".salary");
    const investmentInput = row.querySelector(".investment");
    const insuranceInput = row.querySelector(".insurance");
    const shoppingInput = row.querySelector(".shopping");
    const otherInput = row.querySelector(".other");

    // Get the remaining amount area
    const remainingElement = row.querySelector(".remaining");

    // Get the percentage areas
    const investmentPercent = row.querySelector(".investment-percent");
    const insurancePercent = row.querySelector(".insurance-percent");
    const shoppingPercent = row.querySelector(".shopping-percent");
    const otherPercent = row.querySelector(".other-percent");


    // Function to calculate everything
    function calculate() {

        // Convert input values into numbers
        const salary = Number(salaryInput.value) || 0;
        const investment = Number(investmentInput.value) || 0;
        const insurance = Number(insuranceInput.value) || 0;
        const shopping = Number(shoppingInput.value) || 0;
        const other = Number(otherInput.value) || 0;


        // Calculate remaining salary
        const remaining =
            salary -
            investment -
            insurance -
            shopping -
            other;


        // Display remaining salary
        remainingElement.textContent = remaining.toLocaleString();


        // Calculate percentages
        if (salary > 0) {

            const investmentPercentage =
                (investment / salary) * 100;

            const insurancePercentage =
                (insurance / salary) * 100;

            const shoppingPercentage =
                (shopping / salary) * 100;

            const otherPercentage =
                (other / salary) * 100;


            // Display percentages
            investmentPercent.textContent =
                investmentPercentage.toFixed(1) + "%";

            insurancePercent.textContent =
                insurancePercentage.toFixed(1) + "%";

            shoppingPercent.textContent =
                shoppingPercentage.toFixed(1) + "%";

            otherPercent.textContent =
                otherPercentage.toFixed(1) + "%";

        } else {

            // If salary is empty or zero
            investmentPercent.textContent = "0%";
            insurancePercent.textContent = "0%";
            shoppingPercent.textContent = "0%";
            otherPercent.textContent = "0%";
        }
    }


    // Calculate whenever the user types
    salaryInput.addEventListener("input", calculate);
    investmentInput.addEventListener("input", calculate);
    insuranceInput.addEventListener("input", calculate);
    shoppingInput.addEventListener("input", calculate);
    otherInput.addEventListener("input", calculate);

});
