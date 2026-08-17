import {useState, useRef, useEffect} from 'react';
import { motion } from "motion/react";
import Header from './components/header';
import Console from './pages/console';
import dados from "../src/assets/data.json";

export default function App() {
  const [isAno, setAno] = useState("");
  const secoesRef = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAno(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-64px 0px -50% 0px',
        threshold: 0,
      }
    );

    secoesRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  const anos = [
    "1994",
    "2000",
    "2004",
    "2007",
    "2011",
    "2013",
    "2016",
    "2020",
    "2023"
  ];

  return (
    <div className='w-full h-full flex flex-col items-center overflow-hidden'>
      <Header ano={isAno} />
      <div className='flex flex-wrap flex-col justify-center items-start pl-20 h-screen w-screen mt-20 bg-black'>
        <div className="w-full flex flex-wrap flex-col justify-center items-start gap-4">
          <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, transition: "easeInOut" }}
          className="w-2/3 text-white text-6xl text-start font-grotesk font-semibold uppercase">Linha do Tempo</motion.h1>
          <motion.div
          initial={{opacity: 0, x: -300}}
          animate={{opacity: 1, x: 0}}
          transition={{ duration: 1, transition: "easeInOut", delay: 1.0 }}
          className="w-1/3 h-1 bg-blue-600 mt-4 mb-8">
          </motion.div>
        </div>
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, transition: "easeInOut", delay: 0.5 }}
        className="text-white text-[350px] mt-[-100px] text-start font-zrnic font-bold">
          Playstation
        </motion.h1>
      </div>
      <div>
        {anos.map((ano, index) => (
          <div 
            key={index}
            ref={(el) => {
              if (el) secoesRef.current.set(ano, el);
              else secoesRef.current.delete(ano);
            }}
          >
            <Console idx={index} dados={dados.find((d) => d.ano === ano)} ano={isAno}/>
          </div>
        ))}
      </div>
      
    </div>
  )

}