import {useState, useRef, useEffect} from 'react';
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
      <div className='flex flex-wrap justify-center items-center h-screen w-screen bg-black'>
        <h1 className="w-2/3 text-white text-8xl text-center font-semibold uppercase">A Linha do Tempo da Playstation</h1>
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