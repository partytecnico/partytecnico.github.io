document.addEventListener("DOMContentLoaded", function() {
    pingURL();
});

function pingURL() {
    const URL = "https://lbcldwqase04.bancolombia.corp/sap/bc/webdynpro/sap/zwd_homepage_mashup_sf";
    
    const settings = {
        cache: false,
        dataType: "jsonp",
        crossDomain: true,
        url: URL,
        method: "GET",
        timeout: 5000,
        headers: {
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: {
            200: handleSuccess,
            400: handleVPNError,
            0: handleVPNError
        }
    };

    $.ajax(settings)
        .done(response => console.log(response))
        .fail(response => console.error("Error: ", response));
}

function handleSuccess(response) {
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:green'>Status 200: Page is up!";
    window.location.href = "https://performancemanager8.successfactors.com/xi/ui/payroll/pages/PayStatement.xhtml?bplte_company=bancolombiT4&_s.crb=MS%252fYyAUfTGBOxGsPDjFDxaUa9axTHsSIsrMqNUTdSq8%253d&mashup=true&encodedJSONEvent=QXV0b3NlcnZpY2lvcyBkZWwgRW1wbGVhZG8geSBKZWZl&userId=MDAwMTc1Mjk%3D&legalEntityId=00000001&eou=true";
}

function handleVPNError(response) {
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:red'>Debes estar conectado a una VPN</h3>";
}
