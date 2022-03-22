//MAPA - FUNDAMENTOS E ARQUITETURA DE COMPUTADORES - 51/2022
//ATIVIDADE "MAPA" DA MATÉRIA FUNDAMENTOS E ARQUITETURA DE COMPUTADORES-51/2022

//Retorno do meu número selecionado "8":



const listaDeNumeros = [
    {
        "numero": "0",
        "binary": "000000001000000000000000",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "1",
        "binary": "111111111111101011111010",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "2",
        "binary": "110100100110100100011110",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "3",
        "binary": "010010110000000010000010",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "4",
        "binary": "111011101000001011101110",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "5",
        "binary": "111110101000000001110010",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "6",
        "binary": "111111111010010100000000",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "7",
        "binary": "111111111111111100000000",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "8",
        "binary": "111111111100101111011011",
        "hex": "",
        "cor": ""
    },
    {
        "numero": "9",
        "binary": "000000000000000011111111",
        "hex": "",
        "cor": ""
    }
]

const atividadeMapa = (meuNumero) => {
    let meusValores = {}

    const convertendoBinarioParaHexadecimal = (binary) => parseInt(binary, 2).toString(16).toUpperCase();

    const hexToRgb = (hex) => {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return `${r} ${g} ${b}`;
    }

    listaDeNumeros.forEach(
        (linha, i) => {

            const numero = linha.numero

            if (numero == meuNumero) {
                const binary = linha.binary
                const hex = convertendoBinarioParaHexadecimal(binary)

                const data = {
                    numero,
                    binary,
                    cor: hexToRgb(hex),
                    hex : '#'+hex,
                }

                meusValores = { ...data }
            }
        }
    )
    console.log(meusValores)
}

// Selecione o número que deseja saber os detalhes
atividadeMapa(8)
