var form = document.getElementById('form')

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            var fn = document.getElementById('fn').value.toUpperCase()
            var ln = document.getElementById('ln').value.toUpperCase()
            var idob = document.getElementById('dob').value
            const badminton = document.querySelector('#badminton')
            const cricket = document.querySelector('#cricket')
            const volleyball = document.querySelector('#volleyball')
            
            if(fn == "" || ln == "" || idob == "" || (badminton.checked == false && cricket.checked == false && volleyball.checked == false))
            {
                alert("FIELDS ARE EMPTY, PLEASE FILL ALL FIELDS!");
                
            }
            else { 
            
                var dob = new Date(idob)
                var month_diff = Date.now() - dob.getTime();
                var age_dt = new Date(month_diff)
                var year_diff = age_dt.getUTCFullYear();
                var age = Math.abs(year_diff - 1970)
            
                
                var hobb = ""
                if(badminton.checked) {
                    hobb = hobb + "Badminton  "
                }
                if(cricket.checked) {
                    hobb = hobb + "Cricket  "
                }
                if(volleyball.checked) {
                    hobb = hobb + "Volleyball  "
                }
                var finaloutput = "<h2>Results</h2>" +  "First Name : " + fn + "<br><br>Last Name : " + ln + "<br><br>DOB : " + idob + "<br><br>Age : " + age + "<br><br>Hobbies : " + hobb + "<br><br><br>";
                document.getElementById("form").innerHTML = finaloutput;
            }
        })
