import css from './App.module.css'
import { Route, Routes, useLoaderData } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import Navigation from './Navigation/Navigation'

const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))



function App() {

  return (
    <>
      <Navigation />

      <main className={css.main} >
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movies' element={<MoviesPage/>} />
            <Route path='/movies/:movieId/*' element={<MovieDetailsPage/>} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        
      </main>
    </>
  )
}

export default App




// додати компоненти для помилки і useLoaderData
// стилі 