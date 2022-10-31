$(document).ready(function() {
    $('#frm-login').validate({
        rules: {
            uname : {
                minlength:8
            },
            pass: {
                minlength: 8
            }
        },
        messages: {
            uname: {
                required: "Username is wrong or doesn't exist"
            },
            pass: {
                required: "Incorrect password"
            }
        }
    });
});