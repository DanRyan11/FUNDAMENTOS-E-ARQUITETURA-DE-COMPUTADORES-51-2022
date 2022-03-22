//MAPA - FUNDAMENTOS E ARQUITETURA DE COMPUTADORES - 51/2022

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

    document.querySelector('.table-responsive').querySelectorAll('tr').forEach(
        (e, i) => {
            const lines = e.querySelectorAll('p')
            const numero = lines[0].innerHTML

            if (numero == meuNumero) {
                const binary = lines[1].innerHTML
                const hex = convertendoBinarioParaHexadecimal(binary)

                const data = {
                    numero,
                    binary,
                    hex,
                    cor: hexToRgb(hex)
                }

                meusValores = { ...data }
            }
        }
    )
    console.log(meusValores)
}

// Selecione o número que deseja saber os detalhes
atividadeMapa(8)