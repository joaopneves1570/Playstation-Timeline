import { motion } from "motion/react"

export default function SlidingCard({ dados, idx }) {

    let xInitial = idx % 2 === 0 ? -300 : 300;

    return (
        <motion.div
            className="flex flex-row justify-center items-center gap-8 py-20"
            initial={{ x: xInitial, opacity: 0, rotate: idx%2===0 ? -10: 10 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-80 h-120 p-2 bg-blue-900 rounded-lg shadow-lg overflow-hidden">
                <img src={dados.imagem} alt={dados.titulo} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-white">{dados.titulo}</h2>
                    <p className="text-gray-200">{dados.descricaoCard}</p>
                </div>
            </div>

        </motion.div>
    )
}