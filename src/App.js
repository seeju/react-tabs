import './App.css';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <main>
        <Tabs>
            <div label="Tab 1">
                <h2>Tab 1</h2>
                <p> Content 1</p>
            </div>
            <div label="Tab 2">
                <h2>Tab 2</h2>
                <p> Content 2</p> 
            </div>
            <div label="Tab 3">
                <h2> Tab 3</h2>
                <p> Content 3</p>
            </div>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
