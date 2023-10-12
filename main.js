let buttons = document.querySelectorAll("button")
let comt1 = document.querySelectorAll('.comt1')

console.log(comt1);

let btn_shadow = document.querySelector('.btn-shadow')
let slide_div = document.getElementById('shows')

// let price_shadow = document.querySelector('#price_shadow')







//event button


// btn_shadow.addEventListener("click", () => {

//     slide_div.style = "display: block;"


// })


// btn_shadow.addEventListener("mouseleave", () => {
//     slide_div.style = "display: none;"

// })



buttons.forEach(btn => {


    btn.addEventListener("click", (event) => {

        let show = btn.parentElement;
        // show.innerHTML = `${slide_div.innerHTML}`
        let response = prompt("Ma,rabtaa inaad neefkaan gadato\n1: Haa\n2:Maya")
        if (response == 1) {
            setTimeout(() => {
                show.innerHTML += `<div class="shadows"> 
            <h4 id="price_shadow">Lacagta: 30$</h4>
                        <h4>Mulkiilaha: Jana-Gale</h4>
                        <h4>Nooca:  Xoolo ishkin ah </h4>
                        <h5>👍👍👍👍👍👍</h5>
            
            </div>`

                setTimeout(() => {
                    show.innerHTML = `<h2 class="style"> waad iibsatay neefkaan </h2>`
                }, 2000);



            }, 1000);



        } else {
            alert('Mahadsanid 👏')

        }


        console.log(show);


        // prompt("Marabta inaad gadato neefkaan\n1:Haa\n2:Maya")
    })

})