const url = "https://github.com/guilhermeonrails/api?tab=readme-ov-file"
async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);

    }

    visualizarInformacoesGlobais()
