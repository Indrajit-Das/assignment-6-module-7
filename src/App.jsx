import TaskComponent from './components/TaskComponent';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <h1 className='bg-green-400 text-4xl text-center h-20 py-5 '>Task Manager Applicaton</h1>
      </div>
      <TaskComponent />
      <Footer />
    </>
  )
}

export default App;
