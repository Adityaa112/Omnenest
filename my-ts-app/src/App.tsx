import Greeting from './GreetingProps';
import ProfileCard from './components/ProfileCard';
import Counter from './components/Counter';

function App() {
  let firstName: string = "Aditya";
  let city: string = "New York";
  console.log('First Name:', firstName);
  console.log('City:', city);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw', flexDirection: 'column', textAlign: 'center' }}>
      <Greeting name={firstName} />
      <ProfileCard name={firstName} age={25} bio="Software Developer" isOnline={true} />
      <Counter />
    </div>
  )
}

export default App
