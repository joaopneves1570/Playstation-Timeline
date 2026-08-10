export default function Header({anoAtivo}) {

    const datas = [
        "#1994",
        "#2000",
        "#2004",
        "#2007",
        "#2011",
        "#2013",
        "#2016",
        "#2020",
        "#2023"
    ]

    const selectedAno = "text-shadow-white/50 hover:cursor-pointer font-semibold text-md after:content-[''] after:block after:-w-full after:h-0.5 after:bg-white after:mt-0.5 scale-105";
    const unselectedAno = "hover:cursor-pointer font-semibold text-md after:content-[''] after:block after:-w-full after:h-0.5 after:bg-white after:mt-0.5 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 hover:scale-105";

    return (
        <div className= "flex flex-row justify-center items-center gap-12 py-14 fixed top-0 left-0 w-screen h-8 bg-black/50 backdrop-blur-md z-10">
            <div className="flex flex-row justify-center items-center gap-16 text-white text-lg font-semibold">
                {datas.map((data, index) => {
                    const ano = data.replace("#", "");
                    return <a href={data} key={index} className={anoAtivo === ano ? selectedAno : unselectedAno}>{ano}</a>
    })}
            </div>
        </div>
    )

}