import './App.css'
import UserList from './components/UserList'

function App() {
 
  return (
    <>
    <main className="font-[lato] min-h-screen w-[100%] relative bg-[#101010]">
      <UserList></UserList>
      <img className="fixed w-[30rem] right-[0%] -bottom-[0%] " src="/Ellipse@2x.png" alt="" />
      <img className="fixed w-[30rem] left-[0%] -bottom-[0%] " src="/Ellipse.png" alt="" />
    </main>
    </>
  )
}

export default App
