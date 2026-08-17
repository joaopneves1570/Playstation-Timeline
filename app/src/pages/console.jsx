import SlidingCard from "../components/slidingCard";
import { motion } from "motion/react";

const eraAccent = [
    "text-zinc-400",   // 1994 - PS1
    "text-sky-400",    // 2000 - PS2
    "text-amber-400",  // 2004 - PSP
    "text-indigo-400", // 2007 - PS3
    "text-cyan-400",   // 2011 - PS Vita
    "text-blue-500",   // 2013 - PS4
    "text-purple-400", // 2016 - PS VR
    "text-sky-300",    // 2020 - PS5
    "text-violet-400", // 2023 - PS VR2
];

export default function Console({ idx, dados }) {

    const accent = eraAccent[idx % eraAccent.length];

    return (
        <div id={dados.ano} className="relative flex flex-col w-screen h-screen justify-center overflow-hidden">
            {/* Número fantasma: escala dramática sem competir por atenção */}
            <h1 className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-black/5 text-[45vw] font-bold leading-none">
                {dados.ano}
            </h1>

            {
                idx % 2 === 0 ? (
                    <div className="relative flex flex-row justify-around items-center">
                        <div>
                            <SlidingCard dados={dados} idx={idx} accent={accent} />
                        </div>
                        {desc(dados, idx, accent)}
                    </div>
                ) : (
                    <div className="relative flex flex-row justify-around items-center">
                        {desc(dados, idx, accent)}
                        <div>
                            <SlidingCard dados={dados} idx={idx} accent={accent} />
                        </div>
                    </div>
                )
            }

        </div>
    )

}

const desc = (dados, idx, accent) => {
    return (
        <div className="flex flex-col flex-wrap w-1/2 gap-4">
            <div>
                {/* Kicker/eyebrow: contexto pequeno antes do título grande */}
                <p className={`text-sm font-semibold uppercase tracking-widest ${accent} mb-2`}>
                    Lançamento · {dados.ano}
                </p>
                <h2 className="text-6xl font-zrnic">{dados.titulo}</h2>
                <motion.div 
                initial={{opacity: 0, x: idx%2===0 ? -300: 300}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`h-0.5 w-1/3 mt-2 bg-current ${accent}`}></motion.div>
            </div>
            <p className="text-xl text-justify text/80">{dados.descricao}</p>
            <div>
                <p className={`text-2xl font-semibold ${accent}`}>Controle</p>
                <p className="text-lg text/80">{dados.controle}</p>
            </div>
            <div className="flex flex-col gap-2 text-lg">
                <p className={`text-2xl font-semibold ${accent}`}>Jogos de sucesso</p>
                <div className="flex flex-row gap-2 flex-wrap">
                    {dados.jogos.map((jogo, index) => (
                        <p className="text-lg text/80" key={index}>{jogo}{index == dados.jogos.length - 1 ? "" : ","}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}