document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem('redirected')) {
        pingURL();
    } else {
        removeHeaderDiv();
    }
});

function pingURL() {
    const URL = "https://lbcldwqase04.bancolombia.corp/sap/bc/webdynpro/sap/zwd_homepage_mashup_sf";

    fetch(URL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            // No deberías establecer "Access-Control-Allow-Origin" en el cliente
            // Debería ser manejado por el servidor
            // "Access-Control-Allow-Origin": "*",
        }
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else if ([400, 401, 404].includes(response.status)) {
            handleVPNError();
            throw new Error('VPN Error');
        } else {
            throw new Error('Unknown error');
        }
    })
    .then(data => {
        console.log(data);
        handleSuccess();
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
}

function handleSuccess() {
    sessionStorage.setItem('redirected', 'true');
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:green'>Status 200: Page is up!</h3>";
    window.location.href = "https://performancemanager8.successfactors.com/xi/ui/payroll/pages/PayStatement.xhtml?bplte_company=bancolombiT4&_s.crb=Plq1mCfJTZQJCHgjc8Sq%252b3iDu2qPpaTvMGEBIh4SJwU%253d&mashup=true&encodedJSONEvent=UHJ1ZWJhIGRlIGNvbmV4aW9u&userId=MDAwMTc1Mjk%3D&legalEntityId=00000001&eou=true";
    removeHeaderDiv();
}

function handleVPNError() {
    document.getElementById("outputDiv").innerHTML = "<h3 style='color:red'>Debes estar conectado a una VPN</h3>";
}

function removeHeaderDiv() {
    const headerDiv = document.querySelector("#renderTopNavFixedWidthV12 > xweb-shellbar").shadowRoot.querySelector("div");
    if (headerDiv) {
        headerDiv.remove();
    }
}

