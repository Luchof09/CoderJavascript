// COTIZARDOR PRESTAMOS
// Entradas
const TNA = 137.50;
const TEA = 267.92;
const CTF = 375.60;
const nDiscontSoc = 8;
const nMaxLoan = 8000000;
let membershipInterest;
let quotaInterest;
let sUser = "NO";

// Socio del Banco
let premUser = PremiumUser();

// Preguntar Cuenta Premium
let membershipType = MembershipType();
membershipInterest = InterestAmount(membershipType);

// Preguntar Monto Prestamo
let loanAmount = LoanAmount();

// Preguntar Cantidad de cuotas
let quotas = QuotasAmount();
quotaInterest = QuotasInterest(quotas);

// Calcular Intereses
let quotaAmount = QuotaPureAmount();

// Resultado
let out = LoanResult(); 
alert(out);
console.log(out);