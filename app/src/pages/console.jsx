import SlidingCard from "../components/slidingCard";

export default function Console({ idx, dados }) {

    return (
        <div id={dados.ano} className="flex flex-col w-screen h-screen">
            <div className="justify-center items-center w-screen py-20 bg-black mt-10 mb-10">
                <h1 className="text-8xl text-white text-center">{dados.ano}</h1>
            </div>
            {
                idx % 2 === 0 ? (
                    <div className="flex flex-row justify-around items-center">
                        <div>
                            <SlidingCard dados={dados} idx={idx} />
                        </div>
                        {desc(dados)}
                    </div>
                ) : (
                    <div className="flex flex-row justify-around items-center">
                        {desc(dados)}
                        <div>
                            <SlidingCard dados={dados} idx={idx} />
                        </div>
                    </div>
                )
            }

        </div>
    )

}

const desc = (dados) => {
    return (
        <div className="flex flex-col flex-wrap w-1/2 gap-4">
            <h2 className="text-5xl">{dados.titulo}</h2>
            <p className="text-xl">{dados.descricao}</p>
            <p className="text-lg">Controle utilizado: {dados.controle}</p>
            <div className="flex flex-wrap gap-2 text-lg">
                <p className="">Jogos de sucesso:</p>
                {dados.jogos.map((jogo, index) => (
                    <p key={index}>{jogo}{index == dados.jogos.length - 1 ? "" : ","}</p>
                ))}
            </div>
        </div>
    )
}