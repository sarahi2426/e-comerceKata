import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/Services/itemServices'
import '@/styles/styleHome.css'
import SearchBar from '../Components/SearchBar/SearchBar'

const Home = () => {
  const [itemList, setItemsList] = useState([])
  const [busqueda, setBusqueda] = useState([])

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItemsService(busqueda)
        if (response.status === 200) {
          setItemsList(response.data)
          console.log(response.data + 'INTENTANDO')
          console.log(busqueda)
        }
      } catch (error) {
        console.log('Ocurrio un eror en home', error)
      }
    }
    fetchItemData()
  }, [busqueda])

  return (
    <>
      <SearchBar text={busqueda} setText={setBusqueda} />
      <section className='contenedorTarjetas'>
        {itemList && itemList.map((product) => (
          <div className='cardContent' key={product.id}>
            <div className='imgCard'>
              <img
                className='imgProduct'
                src={product.image}
                alt={product.product_name}
              />
            </div>
            <div className='description'>
              <h3 className='nombre'>{product.product_name}</h3>
              <p className='tipo'>{product.description}</p>
              <button className='more-info btn-success ' data-toggle='modal' data-target='#ventanaModal'>
                Comprar
              </button>
              <div className='modal fade' id='ventanaModal' tabIndex='-1' role='dialog' aria-labelledby='modal-title' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLongTitle'>{product.product_name}</h5>
                      <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      ...
                    </div>
                    <div className='modal-footer'>
                      <button type='button' className='btn btn-secondary' data-dismiss='modal' aria-label='Cerrar'>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  )
}

export default Home
