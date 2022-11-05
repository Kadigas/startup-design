$(document).ready(function() {
    $('#frm-login').validate({
        rules: {
            username : {
                required: true,
                minlength:8,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            username: {
                required: "Nama pengguna tidak boleh dikosongi!",
                minlength: "Nama pengguna harus lebih dari 8 karakter!",
                maxlength: "Nama pengguna tidak boleh lebih dari 10 karakter!"
            },
            email: {
                required: "Email tidak boleh dikosongi!",
                email: "Format email tidak valid!"
            },
            password: {
                required: "Kata sandi tidak boleh dikosongi!",
                minlength: "Kata sandi harus lebih dari 8 karakter!"
            }
        }
    });
});