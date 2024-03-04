/* eslint-disable react/jsx-max-depth */
import Customers from './Customers';
import trabalhador from '../../public/trabalhador.jpg';
import sstWord from '../../public/sst-word.png';

function MainContent() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className=" w-8/12 flex flex-col justify-center
        items-center text-wrap text-justify"
        >
          <div className="flex flex-col items-center mt-16 font-mono">
            <div>
              <h2 className=" font-bold font-mono  text-3xl w-96 text-start m-2">
                Já enviou as Informações do SST da sua empresa para o eSocial?
              </h2>
              <p className="w-96 mb-6 m-2 text-red-500 text-xl">
                Nós podemos te Ajudar !
              </p>
              <div className="w-96 text-start m-2 text-xl">
                <p>
                  Indústrias seguras e trabalhadores saudáveis, esse é o segredo
                  da produtividade, Explore nossas soluções de SST e transforme
                  seu ambiente de trabalho!
                </p>
              </div>
            </div>
            <button
              type="button"
              className="border-indigo-400 mt-8 rounded-full border-2 p-2 w-52
               hover:bg-indigo-800 hover:text-white transition bg-indigo-300
               duration-500 ease-in-out transform hover:scale-110 font-medium font-sans"
            >
              Solicite uma Proposta
            </button>
          </div>
        </div>
        <div className="w-1/2  flex justify-center flex-col items-center ">
          <div>
            <img
              src={ trabalhador }
              alt="trabalhador"
              className="w-1/2 rounded-lg m-2"
            />
          </div>
          <img
            src={ sstWord }
            alt="trabalhador"
            className="w-1/2 rounded-lg m-2"
          />
        </div>
      </div>
      <div className="mt-10">
        <Customers />
      </div>
    </div>
  );
}
export default MainContent;
