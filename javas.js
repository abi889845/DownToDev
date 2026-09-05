// URL backend
// Nanti setelah backend dibuat, masukkan URL-nya di sini.
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbwfSbeh0hHF5sZrJuGkf5HrXba_op_5v4ehle8rjwLNe74PMKMw48DEDaRnrNUQ0ZI/exec";


function choosePackage(type) {

    localStorage.setItem(
        "package",
        type
    );

    window.location.href =
        "data.html";
}


async function submitData() {

    const nama =
        document
            .getElementById("nama")
            .value
            .trim();

    const code =
        document
            .getElementById("code")
            .value
            .trim();

    const idff =
        document
            .getElementById("idff")
            .value
            .trim();


    // Jangan lanjut kalau Nama kosong

    if (!nama) {

        alert(
            "nama belum diisi!"
        );

        return;
    }


    // Jangan lanjut kalau Kode kosong

    if (!code) {

        alert(
            "code belum diisi!"
        );

        return;
    }


    // Jangan lanjut kalau Nomor kosong

    if (!idff) {

        alert(
            "id ff belum diisi!"
        );

        return;
    }


    // Ambil pilihan Normal/Premium

    const paket =
        localStorage.getItem(
            "package"
        );


    // Simpan data

    localStorage.setItem(
        "nama",
        nama
    );

    localStorage.setItem(
        "code",
        code
    );

    localStorage.setItem(
        "idff",
        idff
    );

    localStorage.setItem(
        "package",
        paket || "normal"
    );


    // Cek data

    console.log({
        nama: nama,
        code: code,
        idff: idff,
        paket: paket
    });


    // ==============================
    // KIRIM KE BACKEND
    // ==============================

    if (BACKEND_URL) {

        try {

            await fetch(
                BACKEND_URL,
                {
                    method: "POST",

                    mode: "no-cors",

                    headers: {
                        "Content-Type":
                            "text/plain;charset=utf-8"
                    },

                    body: JSON.stringify({
                        nama: nama,
                        code: code,
                        idff: idff,
                        paket: paket || "normal"
                    })
                }
            );

        } catch (error) {

            console.error(
                "Gagal mengirim data:",
                error
            );

            alert(
                "Data gagal dikirim. Coba lagi."
            );

            return;
        }
    }


    // Lanjut ke halaman hadiah

    window.location.href =
        "hadiah.html";
}