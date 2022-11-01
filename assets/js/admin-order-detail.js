$(document).ready(function () {
  let statusFlag = 1;
  // Change status to "Mengunggu verfikasi pembayaran"
  $("#payment-status").on("click", function () {
    // Chage status badge
    changeOrderStatus("Mengunggu verfikasi pembayaran", "bg-warning");

    // Show payment proof image
    const paymentProofTag = `
    <img
        src="../../../../assets/img/payment.jpg"
        alt="Bukti Pembayaran"
        class="img-fluid img-thumbnail"
    />`;
    $("#payment-proof").append(paymentProofTag);

    // Show verification button
    const verificationButtonTag = `
    <form id="form-payment-verification" action="#" method="POST">
        <button id="button-verification-yes" type="button" class="btn btn-primary">Terima Pembayaran</button>
        <button id="button-verification-no" type="button" class="btn btn-outline-danger">
          Tolak Pembayaran
        </button>
    </form>`;
    $("main").append(verificationButtonTag);

    // Remove "belum bayar" description
    $("#payment-status").remove();

    statusFlag++;
  });

  $(document).on("click", "#button-verification-yes", function () {
    // Change status to "Dalam pengerjaan"
    if (statusFlag == 2) {
      // Chage status badge & button text
      changeOrderStatus(
        "Dalam pengerjaan",
        "bg-info",
        "Tandai pesanan siap diambil",
        "Batalkan pesanan"
      );

      statusFlag++;
      return;
    }

    // Change status to "Siap diambil"
    if (statusFlag == 3) {
      changeOrderStatus(
        "Siap diambil",
        "bg-primary",
        "Tandai pesanan sudah selesai",
        "Batalkan pesanan"
      );

      statusFlag++;
      return;
    }

    // Change status to "Sudah selesai"
    if (statusFlag == 4) {
      changeOrderStatus("Sudah selesai", "bg-success");

      $("#form-payment-verification").remove();
    }
  });

  // Change status to "Siap diambil"
  $(document).on("click", "#button-verification-yes", function () {});

  // Change status to "Sudah selesai"
  $(document).on("click", "#button-verification-yes", function () {});

  function changeOrderStatus(
    text,
    color,
    primaryButtonText = "",
    secondaryButtonText = ""
  ) {
    // Change status badge
    const badgeStatus = $("#badge-status");
    badgeStatus.removeClass();
    badgeStatus.addClass(`badge ${color}`);
    badgeStatus.html(text);

    if (primaryButtonText)
      $("#button-verification-yes").html(primaryButtonText);

    if (secondaryButtonText)
      $("#button-verification-no").html(secondaryButtonText);
  }
});
