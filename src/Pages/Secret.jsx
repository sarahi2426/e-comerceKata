import { AuthContext } from '@/Context/AuthContext'

const Secret = () => {
  const { userPayload } = AuthContext()
  return (
    <>
      <h1>Secret</h1>
      {
      userPayload?.role === 'ADMIN'
        ? <h2>HOLA Admin!</h2>
        : <h2>Hola custumer</h2>
    }
      {userPayload?.role === 'ADMIN' && <h3>Saludos Admin</h3>}
      {userPayload?.role === 'CUSTUMER' && <h3>Saludos CUSTUMER</h3>}
    </>
  )
}

export default Secret
