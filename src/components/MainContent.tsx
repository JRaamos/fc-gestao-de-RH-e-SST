import Customers from './Customers';

function MainContent() {
  return (
    <div>
      <p>Já enviou as Informações do SST da sua empresa para o eSocial?</p>
      <p>Nós podemos te Ajudar !</p>
      <p>
        Indústrias seguras e trabalhadores saudáveis, esse é o segredo da
        produtividade, Explore nossas soluções de SST e transforme seu ambiente
        de trabalho!
      </p>
      <button
        type="button"
        className="border-black
       border"
      >
        Solicite uma Proposta
      </button>
      <div>
        <Customers />
      </div>
    </div>
  );
}
export default MainContent;
