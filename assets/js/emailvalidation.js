$(document).ready(function() {
    $('#cntct').validate({
        rules: {
            email : {
              email: true,
              accept:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}"
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