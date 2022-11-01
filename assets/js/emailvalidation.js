$(document).ready(function() {
    $('#cntct').validate({
        rules: {
            email : {
              email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Masukkan email."
            },
            message: {
                required: "Masukkan pesan."
            }
        }
    });
});;