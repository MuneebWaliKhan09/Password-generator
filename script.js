


class GeneratePassword {

    strong(strongpass) {

        this.strongpass = strongpass;
        console.log(this);


    }
    weak(weakpass) {

        this.weakpass = weakpass;
        console.log(this);


    }

    superstrong(superpass) {

        this.superpass = superpass;
        console.log(this);


    }

    funny(funnypass) {

        this.funnypass = funnypass;
        console.log(this);


    };
}


let rand = Math.floor(Math.random() * 3);

let strongPassword = new GeneratePassword();
strongPassword.strong(["A@#$%$$%$^jasS", "asjdasjd;lkas;M", '@#$%@#$FDFQDASDASD', '123123#$%@#$@#$!K'][rand]);

let weakPassword = new GeneratePassword();
weakPassword.weak(['gorges', 'lorri', '@@#cxfs', 'uiqwo'][rand]);

let supStrongPassword = new GeneratePassword();
supStrongPassword.superstrong(['238812!#ADAS@#!@#ASDASasdcasD', '@#!#$!@#kajsRRADASDASDdas##1d', '@#!#$!@#kajsRRADASDASDdas%^@d', '@#!#$!@#kajs!@#$asdjlasad'][rand]);


let funnyPassword = new GeneratePassword();
funnyPassword.funny(['alooo', 'ghobi', 'potatos', 'biscot'][rand]);



let strong = document.getElementById("strong");
let weak = document.getElementById("weak");
let superst = document.getElementById("superst");
let funnypass = document.getElementById("funny");
let genpanel = document.getElementById("genpanel");


strong.onclick = function () {
    genpanel.value = "Generating...";

    setTimeout(() => {
        genpanel.value = strongPassword.strongpass;

        setTimeout(() => {
            location.reload();
        }, 10000);

    }, 2000);

}

weak.onclick = function () {
    genpanel.value = "Generating...";

    setTimeout(() => {

        genpanel.value = weakPassword.weakpass;

        setTimeout(() => {
            location.reload();
        }, 10000);

    }, 2000);

}

superst.onclick = function () {
    genpanel.value = "Generating...";

    setTimeout(() => {

        genpanel.value = supStrongPassword.superpass;


        setTimeout(() => {
            location.reload();
        }, 10000);

    }, 2000);



}

funnypass.onclick = function () {

    genpanel.value = "Generating...";

    setTimeout(() => {

        genpanel.value = funnyPassword.funnypass;


        setTimeout(() => {
            location.reload();
        }, 10000);

    }, 2000);

}







