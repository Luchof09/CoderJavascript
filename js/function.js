function PremiumUser() {
    let premUser = prompt("Eres Usuario Premium?\n1- Sí\n2- No");

    while (premUser != 1 && premUser != 2) {
        alert("Unicamente se permite indicar 1- Usuario Premium o 2- NO Sos Usuario Premium!");
        premUser = prompt("Eres Usuario Premium?\n1- Sí\n2- No");
    }
    console.log("Usuario Premium: " + premUser);

    return premUser;
}

function MembershipType() {
    let membershipType = prompt("Ingresar Tipo de Membresia: Bronce/Platinium/Golden:").toUpperCase();
    
    while (premUser != 1 && premUser != 2) {
        alert("Unicamente se permite indicar <<Bronce/Platinium/Golden>>!");
        premUser = prompt("Ingresar Tipo de Membresia:");
    }
    return membershipType;
}

function InterestAmount(membershipType) {
    if (membershipType == "BRONCE") {
        membershipInterest = 60;
    } else if (membershipType == "PLATINIUM") {
        membershipInterest = 50;
    } else if (membershipType == "GOLD"){
        membershipInterest = 20;
    }

    return membershipInterest;
}

function LoanAmount() {
    let loanAmount = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + nMaxLoan + ")"));

    while (loanAmount > nMaxLoan) {
        alert("El monto solcitado supera al máximo permitodo! Máx: $" + nMaxLoan);
        loanAmount = parseFloat(prompt("Ingrese el Monto del Préstamo: (Máx: $" + nMaxLoan + ")"));
    }

    return loanAmount;
}

function QuotasAmount() {
    let quotas = parseInt(prompt("Ingrese la cantidad de quotas: 12/24/36/48"));

    while (quotas != 12 && quotas != 24 && quotas != 36 && quotas != 48) {
        alert("Solo es posible solicitar en 12/24/36/48 quotas!");
        quotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"))
    }

    return quotas;
}

function QuotasInterest(quotas) {
    if (quotas == 12) {
        quotaInterest = 100;
    } else if (quotas == 24) {
        quotaInterest = 200;
    } else if (quotas == 36) {
        quotaInterest = 300;
    } else {
        quotaInterest = 500;
    }

    return quotaInterest;
}

function QuotaPureAmount() {
    let pureQuota = loanAmount / quotas; 
    let mambershipInterestQuota = membershipInterest / quotas; 
    let interestQuotaQuota = quotaInterest / quotas;
    let tnaQuota = TNA / quotas;
    let teaQuota = TEA / quotas;
    let ctfQuota = CTF / quotas;

    let pureQuotaInterestMembershipQuota = (pureQuota * mambershipInterestQuota) / 100;
    let pureQuotaInterestQuotapQuota = (pureQuota * interestQuotaQuota) / 100;
    let pureQuotaTNAquota = (pureQuota * tnaQuota) / 100;
    let pureQuotaTEAquota = (pureQuota * teaQuota) / 100;
    let pureQuotaCTFquota = (pureQuota * ctfQuota) / 100;

    let quotaAmount = pureQuota + pureQuotaInterestMembershipQuota + pureQuotaInterestQuotapQuota + pureQuotaTNAquota + pureQuotaTEAquota + pureQuotaCTFquota;
    console.log("Valor de Cuota: $" + quotaAmount);

    return quotaAmount;
}

function LoanResult() {
    // Verificar si es usuario premium, realizo bonificacion
    if (premUser == 1) {
        quotaAmount = quotaAmount - ((quotaAmount * nDiscontSoc) / 100);
        console.log("Bonificación: $" + quotaAmount);
        sUser = "SÍ";
    }
    
    let out = "RESUMEN DEL PRÉSTAMO:\n\n";
    out += "Usuario Premium: " + sUser + "\n";
    out += "Tipo de Membresia: " + membershipType + "\n";
    out += "Monto del Préstamo: $" + loanAmount + "\n";
    out += "cuotas: " + quotas + "\n\n";
    out += "Total a Abonar:\n";
    out += quotas + " cuotas de $" + quotaAmount.toFixed(2);
    
    return out;
}