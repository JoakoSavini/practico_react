import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* importo los contenedores */
import UsersContainer from './components/users/usersContainer'
import AlbumsContainer from './components/albums/albumsContainer'
import PostContainer from './components/posts/postsContainer'


import { Menubar } from 'primereact/menubar'
import Home from './components/Home'

/* traigo el create user */
import CreateUser from './components/users/CreateUsers'


function App() {
  const items = [
    {label:'Home', icon:'pi pi-home', url:'/'},
    {label:'Usuarios', icon:'pi pi-users', url:'/usuarios'},
    {label:'Albums', icon:'pi pi-book', url:'/albums'},
    {label:'Posts', icon:'pi pi-info-circle', url:'/posts'},
    {label:'Nuevo Usuario', icon:'pi pi-user-plus', url:'/registered'}
]
  return (
    <BrowserRouter>
    <Menubar model={items}/>
    <Routes>
    
    {/* aca van las rutas */}
    <Route path='/' element={<Home/>}/>
    <Route path='/usuarios' element={<UsersContainer/>}/>
    <Route path='/registered' element={<CreateUser/>}/>
    <Route path='/albums' element={<AlbumsContainer/>}/>
    <Route path='/posts' element={<PostContainer/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
