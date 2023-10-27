import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='region/:id' element={<AllRegion />} />
        <Route path='departamentos/:id' element={<Departaments />} />
        <Route path='presidentes' element={<AllPresidents />} />
        <Route path='presidente/:id' element={<President />} /> */}

        {/*para que navegue directamente  */}
        <Route path='/' element={<Navigate to={<Home />} />} />
        <Route path='/*' element={<Navigate to={<Home />} />} />
        <Route />
      </Routes>
    </>
  )
}
