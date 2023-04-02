import './App.css';
import AgeForm from './components/AgeForm.js'
import AgeCalculation from './components/AgeCalculation.js'

function caluclateAge(date) {
  console.log(date)
}

function App() {
  return (
    <div className="App">
      <AgeForm onSubmitButton={caluclateAge} />
      <AgeCalculation days={4}/>
    </div>
  );
}

export default App;
