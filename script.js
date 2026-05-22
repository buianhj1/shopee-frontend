async function convertLink() {

    const originalLink =
        document.getElementById("inputLink").value;


    if (!originalLink) {

        alert("Hãy nhập link");

        return;
    }


    document.getElementById("result").innerHTML =
        "Đang xử lý...";


    try {

        const response = await fetch(

            "http://localhost:3000/convert",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    url: originalLink
                })
            }
        );


        const data = await response.json();


        if (data.success) {

            document.getElementById("result").innerHTML = `

                <p>Affiliate Link:</p>

                <a href="${data.aff_link}"
                   target="_blank">

                   ${data.aff_link}

                </a>
            `;

        } else {

            document.getElementById("result").innerHTML =
                "API lỗi";
        }

    } catch (error) {

        console.log(error);

        document.getElementById("result").innerHTML =
            "Server lỗi";
    }
}