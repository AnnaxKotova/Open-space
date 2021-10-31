//program is starting after the program is load
window.addEventListener("load", scenario);


function scenario() {
    let panel = document.querySelectorAll('input[type="checkbox"], input[type="range"], #launch');
    let selectors = document.querySelectorAll('input[type="checkbox"], input[type="range"]');

    //by default the panel is blocked
    panel.forEach(e => {
        e.disabled = true;
    });

    let pass = document.querySelector('input[type="password"]');
    let okay = document.getElementById('okayy');

    //verification of the password and panel unblock
    okay.addEventListener("click", function(){
        if (pass.value === "TrustNo1") {
            selectors.forEach(e => {
                e.disabled = false;
            });
            pass.disabled = true;
            okay.disabled = true;
            pass.classList.remove("error");
        }

        else {
            pass.classList.add("error");
        }
    });



    selectors.forEach(elem => {
        elem.onchange = function () {
            let valuesCheckboxes = [ ];
            let checkboxes = document.querySelectorAll('input[type="checkbox"]');

            let is_checked = true;

            //checking if all the checkboxes are checked
            for (let x = 0; x < checkboxes.length; x++) {
                if (is_checked === checkboxes[x].checked) {
                    valuesCheckboxes.push(100);
                }
            }


            let levers = document.querySelectorAll('input[type="range"]');
            let valuesLevers = [ ];

            //if all the levers are on the maximum
            for (let x = 0; x < levers.length; x++) {
                console.log(levers[x].value);

                    valuesLevers.push(levers[x].value);

            }

            let check = valuesLevers.every(elem => elem === '100');

            console.log(valuesLevers);
            console.log(valuesCheckboxes);
            console.log(check);
            if ((valuesCheckboxes.length === 6) && (check === true)){
                document.getElementById("launch").disabled = false;
            }

        }
        document.getElementById("launch").addEventListener("click", function() {
            let rocket = document.querySelector('.rocket');

            rocket.animate([
                { // current position of your rocket
                    top: '400px',
                    left: '300px'
                },
                { //  final position of your rocket
                    left: '440px',
                    top: '117px'
                }
            ], {
                // timing options
                duration: 2000,
                iterations: 1
            })
        })
    });

}




