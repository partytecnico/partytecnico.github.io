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
        timeout: 10000,
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
    const headerDiv = document.querySelector("#container > div.sf_common_comp-Page__header > div");
    if (headerDiv) {
        headerDiv.remove();
    }
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:green'>Status 200: Page is up!";
    window.location.href = "https://performancemanager8.successfactors.com/xi/ui/payroll/pages/PayStatement.xhtml?bplte_company=bancolombiT4&_s.crb=Plq1mCfJTZQJCHgjc8Sq%252b3iDu2qPpaTvMGEBIh4SJwU%253d&mashup=true&encodedJSONEvent=UHJ1ZWJhIGRlIGNvbmV4aW9u&userId=MDAwMTc1Mjk%3D&legalEntityId=00000001&eou=true";
}

function handleVPNError(response) {
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:red'>Debes estar conectado a una VPN</h3>";
}
