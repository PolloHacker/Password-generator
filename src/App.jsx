import GenButton from "./components/gen_button";
import Options from "./components/options";
import PassDisplay from "./components/pass_display";
import PassStrength from "./components/pass_strength";


export default function App() {
  return (
    <div className='app-container'>
        <span className='app-title'>Password Generator</span>
        <PassDisplay />
        <div className='main-container'>
            <Options />
            <PassStrength />
            <GenButton />
        </div>
    </div>
  )
}