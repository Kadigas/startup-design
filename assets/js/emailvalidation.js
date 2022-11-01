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
                email: "Masukkan format email dengan benar.",
                required: "Masukkan email."
            },
            message: {
                required: "Masukkan pesan."
            }
        }
    });
});;