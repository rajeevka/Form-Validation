var input = document.getElementById("name")
         var namelast = document.getElementById("namelast")
        var email = document.getElementById("email")
        var phno = document.getElementById("phonenumber")
         var password = document.getElementById("password")
          var Bio = document.getElementById("Bio")
        const button = document.getElementById("submitbutton")
const error = {
            namelast:true,
            name: true,
            email: true,
             phoneNumber: true,
             password: true,
             Bio: true
            
        }
        function inputValueChange() {
            const helperText1 = document.getElementById("helperText1")
            const helperTextlastname = document.getElementById("helperTextlastname")
            const helperText2 = document.getElementById("helperText2")
            const bio = document.getElementById("bio")
            const helperText4 = document.getElementById("helperText4")
            const helperText5 = document.getElementById("helperText5")
            const helperText7 = document.getElementById("helperText7")
            if (input.value === "" || namelast.value === "") {
                error.name = true
                error.namelast =true
                input.classList.add("error")
                namelast.classList.add("error")
                console.log("name");
                helperText1.innerText = "First name must be alphanumeri and contain 3-16 characters"
                helperTextlastname.innerText ="Last name must be alphanumeri and contain 3-16 characters"
            }
            else {
                error.name = false
                input.classList.remove("error")
                 namelast.classList.remove("error")
                helperText1.innerText = ""
                helperTextlastname.innerText =""


                if (input.value.length < 3 || namelast.value < 3) {
                    error.name = true
                    input.classList.add("error")
                    namelast.classList.add("error")
                    helperText1.innerText = "First name must be alphanumeri and contain 3-16 characters"
                    helperTextlastname.innerText ="Last name must be alphanumeri and contain 3-16 characters"
                }
                else {
                    error.name = false
                    error.namelast =false
                    input.classList.remove("error")
                    namelast.classList.remove("error")
                    helperText1.innerText = ""
                    helperTextlastname.innerText =""


                    if (/^[a-zA-Z]*$/.test(input.value) == false || /^[a-zA-Z]*$/.test(namelast.value) == false) {
                        error.name = true
                        error.namelast =true
                        input.classList.add("error")
                        namelast.classList.add("error")
                        helperText1.innerText = "First name must be alphanumeri and contain 3-16 characters"
                         helperTextlastname.innerText ="Last name must be alphanumeri and contain 3-16 characters"

                    }
                    else {
                        error.name = false
                        input.classList.remove("error")
                        namelast.classList.remove("error")
                        helperText1.innerText = ""
                        helperTextlastname.innerText =""
                    }
                }

            }
            if ((email.value === "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(email.value) == false)) {
                helperText2.innerText = "Email must be a valid address, e.g example@example.com"
                error.email = true
                email.classList.add("error")

            } else {
                helperText2.innerText = ""
                error.email = false
                email.classList.remove("error")
            }

            if (phno.value === "") {
                error.phoneNumber = true
                phno.classList.add("error")
                helperText4.innerText = "A valid Telephone number (11 digit and 333-333-3334)"
            } else {
                error.phoneNumber = false
                phno.classList.remove("error")
                helperText4.innerText = ""
                if (phno.value.length == 9) {
                    error.phoneNumber = true
                    phno.classList.add("error")
                    helperText4.innerText = "A valid Telephone number (11 digit and 333-333-3334)"
                } else {
                    error.phoneNumber = false
                    phno.classList.remove("error")
                    helperText4.innerText = ""
                    if (/^\w{9,9}\d+$/.test(phno.value) == false) {
                        error.phoneNumber = true
                        phno.classList.add("error")
                        helperText4.innerText = "A valid Telephone number (11 digit and 333-333-3334)"
                    } else {
                        error.phoneNumber = false
                        phno.classList.add("error")
                        helperText4.innerText = ""

                    }
                }
            }
            if ((phno.value === "" || /^\w{9,9}\d+$/.test(phno.value) == false || phno.value.length == 9)) {
                error.phoneNumber = true
                phno.classList.add("error")
            } else {
                error.phoneNumber = false
                phno.classList.remove("error")
            }
             var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            if (password.value.match(passw)) {
                error.password = false
                password.classList.remove("error")
                helperText5.innerText = ""
            } else {
                error.password = true
                password.classList.add("error")
                helperText5.innerText = "Password must be alphanumeric (@,_ and - are also allowed) and between 6 -20 characters"
            }
            if (Bio.value.length <= 8) {
                error.Bio = false
                Bio.classList.add("error")
                bio.innerText ="Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters"
                
            } else {
                Bio.classList.remove("error")
                bio.innerText =""
            }


        }
        function submitData() {

            const DataToSend = {
                name: input.value,
                email: email.value,
                phoneNumber: phno.value
            }
            if (error.name === true || error.email === true ||  error.phoneNumber === true) {
                helperText6.innerText = "Form Values Can't Be Empty"
                console.log("errors are there");
                input.classList.add("error")
                namelast.classList.add("error")
                email.classList.add("error")
                phno.classList.add("error")

            } else {
                console.log("button clicked");
                console.log("data", DataToSend);

            }
        }
