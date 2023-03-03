
async function teste(){
    let response = await fetch('http://uol.com.br');
    let dados = await response.text();
    console.log(dados);
}

teste();