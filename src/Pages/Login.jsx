import { useForm } from 'react-hook-form'
import { loginUserService } from '@/Services/userServices'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/Hook/useAuthContext'
import '@/styles/form.css'
import logo from '../assets/icono_logo_c.svg'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const { login } = useAuthContext()

  const onSubmit = async (data) => {
    console.log('Datos enviados:', data)
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        navigate('/')
        console.log('Usuario autenticado exitosamente')
        login(response.data.token)
      } else {
        console.log('Error al crear el usuario:', response)
      }
    } catch (error) {
      console.log('Ocurrió un error', error)
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        console.error('Error en la respuesta del servidor:', error.response.data)
        console.error('Código de estado:', error.response.status)
        console.error('Encabezados:', error.response.headers)
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request)
      } else {
        // Algo sucedió al configurar la solicitud
        console.error('Error al configurar la solicitud:', error.message)
      }
    }
  }
  return (
    <><h1>LOGIN</h1>
      <main className='form-singin w-100 m-auto'>
        <div className='login'>
          <div className='login-container'>
            <img src={logo} alt='logo' />
            <p className='logo-title'>Shoping</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                placeholder='correo@mail.com'
                id='email'
                onChange={(event) => setEmail(event.target.value)}
                {...register('email')}
              />
              <p>{errors.email?.message}</p>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='simple-password'
                {...register('password')}
              />
              <p>{errors.password?.message}</p>

              <button type='submit'>Iniciar Sesion</button>
            </form>
          </div>
        </div>
      </main>
    </>

  )
}

export default Login
