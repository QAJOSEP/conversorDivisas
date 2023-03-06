import Navbar from './components/Navbar';

function App() {

  return (<>
    <Navbar />
    <div className='h-screen grid place-items-center bg-gradient-to-r from-pink-600 to-purple-700'>

      <form className=" max-w-2xl mx-2 py-2 px-2 space-y-2"
        onSubmit={evento => {
          evento.preventDefault();

          const fromCurrency = evento.target.fromCurrency.value;
          const toCurrency = evento.target.toCurrency.value;
          const quantity = evento.target.quantity.value;

          result(fromCurrency, toCurrency, quantity);

        }}
      >
        <label className=' block text-gray-800 text-lg font-bold'>
          De la moneda
        </label>
        <input className='uppercase'
          type='text'
          name='fromCurrency'
          placeholder='  Ingresa Moneda'
          autoComplete='off'
        >

        </input>

        <label className=' block text-gray-800 text-lg font-bold'>
          A la moneda
        </label>
        <input className='uppercase'
          type='text'
          name='toCurrency'
          placeholder='  Moneda destino'
          autoComplete='off'
        >
        </input>

        <label className=' block text-gray-800 text-lg font-bold'>
          Cantidad
        </label>
        <input
          type='number'
          name='quantity'
          placeholder='  Cantidad a convertir'
          autoComplete='off'
        >
        </input>
        <div>
          <button type='submit' className='border rounded text-white font-semibold py-1 px-1 my-1'
          >Convertir</button>
        </div>
      </form>


    </div>
  </>
  )
}

const result = (fromCurrency, toCurrency, quantity) => {
  if (fromCurrency !== '' && toCurrency !== '' && quantity !== '')
    fetch(`http://localhost:8100/currency-conversion/from/${fromCurrency}/to/${toCurrency}/${quantity}`)
      .then(response =>
        response.json())
      .then(data => alert("$"+`${quantity}`+" "+`${fromCurrency}`+" "+"Equivalen a:"+" "+"$"+data.totalCalcAmount+" "+`${toCurrency}`))

  else alert('Error debe llenar los 3 campos')
}

export default App;
