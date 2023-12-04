const nomeHeroi = "Lucas";
const derrotas = 39;
const vitorias = 65;
let nivel = " ";

function saldo(vitorias, derrotas) {
    if (derrotas > vitorias) {
        resultado = 0
    } else {
        resultado = vitorias - derrotas
    }
    return resultado
}

function ranqueada(vitorias) {
    saldo(vitorias, derrotas);

    if (resultado <= 10) {
        nivel = "Ferro";
    }
    else if (resultado > 11 && resultado <= 20) {
        nivel = "Bronze";
    }
    else if (resultado > 21 && resultado <= 50) {
        nivel = "Prata";
    }
    else if (resultado > 51 && resultado <= 80) {
        nivel = "Ouro";
    }
    else if (resultado > 81 && resultado <= 90) {
        nivel = "Diamante";
    }
    else if (resultado > 91 && resultado <= 100) {
        nivel = "Lendário";
    }
    else if (resultado > 100) {
        nivel = "Imortal";
    };
    return nivel
};

ranqueada(vitorias)


console.log(`O Herói de nome ${nomeHeroi} tem ${vitorias} vitórias e ${derrotas} derrotas, e conta com o saldo de ${resultado} pontos.\nEle está no nível ${nivel}!!!`)

