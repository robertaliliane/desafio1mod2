console.log ("Ano novo está chegando!");

let cantora = "Mariah Carey";

let idade = 54;

let ano = 2023;

console.log (ano - idade);

const anoNascimento = ano - idade;

console.log (anoNascimento);

let quartaFeira = true;

console.log (quartaFeira);
console.log (typeof quartaFeira);

let $idade = 32;

if ($idade >= 18) {
 console.log("Você é maior de idade, poderá curtir o show");
}
else {
    console.log("Sinto muito, mas assistirá da tv globo");
}

let aniversário = "Julho";

if (aniversário == "Agosto" || aniversário == "Dezembro" || aniversário = "Junho") {
    console.log("Uma ou mais opções estão corretas");
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${aniversário}`);
}