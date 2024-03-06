import Carousel from './Carousel';

function Customers() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-5 mb-8 text-2xl font-bold font-mono">
        Clientes satisfeitos
      </h1>
      <section className="w-[90%] m-auto h-44">
        <Carousel />
      </section>
    </div>
  );
}
export default Customers;
