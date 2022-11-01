$(document).ready(function () {
  let documentCounter = 1;
  $("#button-add-file").click(function (e) {
    documentCounter++;

    const fileFormUploadTag = `
    <div class="card mb-3">
        <div class="card-body">
            <div class="mb-2">
                <div class="mb-2 d-flex justify-content-end">
                    <button type="button" class="btn-close"></button>
                </div>
                <input
                    class="form-control"
                    type="file"
                    id="document${documentCounter}"
                    name="document${documentCounter}"
                />
            </div>
            <div class="input-group mb-2 input-group-sm">
                <span class="input-group-text" id="inputGroup-sizing-sm"
                    >Beri keterangan</span
                >
                <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="row">
                <div class="col-md-6 row">
                    <div class="col-auto">
                    <label for="totalPrintMonokrom" class="col-form-label"
                        >Jumlah print hitam putih (lembar)</label
                    >
                    </div>
                    <div class="col-auto">
                    <input
                        type="number"
                        id="totalPrintMonokrom"
                        class="form-control totalPrintMonokrom"
                    />
                    </div>
                </div>
                <div class="col-md-6 row">
                    <div class="col-auto">
                    <label for="totalPrintColor" class="col-form-label"
                        >Jumlah print berwarna (lembar)</label
                    >
                    </div>
                    <div class="col-auto">
                    <input
                        type="number"
                        id="totalPrintColor"
                        class="form-control totalPrintColor"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    $("#files").append(fileFormUploadTag);

    const documentCounterTag = $(".document-counter")[0];
    documentCounterTag.innerHTML = parseInt(documentCounterTag.innerHTML) + 1;
  });

  $(".buttonSend").on("click", function () {
    $("#formOrder").submit();
  });

  $(document).on("click", ".btn-close", function () {
    if ($(".btn-close").length == 1) return;

    $(this).parent().parent().parent().parent().remove();

    const documentCounterTag = $(".document-counter")[0];
    documentCounterTag.innerHTML = parseInt(documentCounterTag.innerHTML) - 1;

    updateTotalPrice();
  });

  $(document).on(
    "change",
    ".totalPrintColor, .totalPrintMonokrom",
    function () {
      updateTotalPrice();
    }
  );

  $(".buttonReset").on("click", function () {
    if (prompt()) document.getElementById("formOrder").reset();
  });

  function getTotalPrice() {
    let totalPrintMonokrom = 0;
    let totalPrintColor = 0;

    $(".totalPrintMonokrom").each(function () {
      totalPrintMonokrom += parseInt(this.value);
    });

    $(".totalPrintColor").each(function () {
      totalPrintMonokrom += parseInt(this.value);
    });

    const totalPrice = totalPrintMonokrom * 500 + totalPrintColor * 1000;

    return totalPrice;
  }

  function updateTotalPrice() {
    const totalPrice = getTotalPrice();

    $(".totalPrice")[0].innerHTML = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalPrice);
  }
  $("#formOrder").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        email: true,
      },
      document: {
        required: true,
      },
      totalPrintMonokrom: {
        min: 0,
      },
      totalPrintColor: {
        min: 0,
      },
    },
    messages: {
      name: {
        required: "Nama tidak boleh kosong!",
      },
      email: {
        email: "Format email tidak valid!",
      },
      document: {
        required: "Dokumen tidak boleh kosong!",
      },
      totalPrintMonokrom: {
        min: "Jumlah kertas minimal 0",
      },
      totalPrintColor: {
        min: "Jumlah kertas minimal 0",
      },
    },
  });
});
