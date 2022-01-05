const axios = require("axios");


async function processData(datum) {
    var status;
    var invoice_paid = datum.invoicepaid;
    var invoice_pending = datum.invoicePending;
    var completion;
    if (invoice_paid !== invoice_pending) {
        status = 'pending'
        completion = (invoice_paid / invoice_pending) * 100;
    } else {
        status = 'completed'
        completion = 100;
    }

    var data = {
        name: datum.name,
        company: datum.company,
        completion: completion,
        status: status,
    }
    return data;

}

// Display list of all users.
exports.client_list = async (req, res) => {


    var url = "https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6"

    var data = [];
    var promise_array = [];
    axios.get(url)
        .then(async (response) => {
            if (response.status === 200) {

                data = response.data.clients;

                for (var i = 0; i < data.length; i++) {
                    var promise = processData(data[i]);

                    promise_array.push(promise)
                }

                //console.log(promise_array)
                await Promise.all(promise_array).then((results) => {
                    data = results
                    res.render("index", { title: "Home", data: data })
                })

            }

        })


    //res.send("hie")

};