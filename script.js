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
    const headerDiv = document.querySelector("#container > div.sf_common_comp-Page__header > div");
    if (headerDiv) {
        headerDiv.remove();
    }
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:green'>Status 200: Page is up!";
    window.location.href = "https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml?bplte_company=bancolombiT4&_s.crb=MS%2fYyAUfTGBOxGsPDjFDxaUa9axTHsSIsrMqNUTdSq8%3d#blockView/blockId/block5390";
}

function handleVPNError(response) {
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:red'>Debes estar conectado a una VPN</h3>";
}
