import { useState } from "react";
import './App.css';
import GenButton from "./components/gen_button";
import Options from "./components/options";
import PassDisplay from "./components/pass_display";
import PassStrength from "./components/pass_strength";
import generatePassword from "./utils/generatePassword";

export default function App() {
  const [password, setPassword] = useState('PTx1f5DaFX');
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });
  const [passwordLength, setPasswordLength] = useState(10);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength, options);
    setPassword(newPassword);
  };

  const handleOptionsChange = (e) => {
    const { name, checked } = e.target;
    setOptions({
      ...options,
      [name]: checked
    });
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className='app-wrapper'>
      <span className='app-title'>Password Generator</span>
      <div className='app-container'>
        <div className='password-container'>
          <PassDisplay password={password} onCopy={handleCopyPassword} />
        </div>
        <div className='main-container'>
          <div className='options'>
            
            <div className='password-length'>

            <div className='aditional'>
              <div className='title-password-length'><label className="slider-label">Character Length</label></div>
               <div class="length">
                <label>{passwordLength}</label>
                </div>
                </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={passwordLength} 
                onChange={handlePasswordLengthChange} 
              />
            </div>

            <label>
              <input 
                type="checkbox" 
                name="uppercase" 
                checked={options.uppercase} 
                onChange={handleOptionsChange} 
              />
              Include uppercase letters
            </label>
            <label>
              <input 
                type="checkbox" 
                name="lowercase" 
                checked={options.lowercase} 
                onChange={handleOptionsChange} 
              />
              Include lowercase letters
            </label>
            <label>
              <input 
                type="checkbox" 
                name="numbers" 
                checked={options.numbers} 
                onChange={handleOptionsChange} 
              />
              Include numbers
            </label>
            <label>
              <input 
                type="checkbox" 
                name="symbols" 
                checked={options.symbols} 
                onChange={handleOptionsChange} 
              />
              Include symbols
            </label>
          </div>
          <PassStrength />
          <GenButton onGenerate={handleGeneratePassword} />
        </div>
      </div>
    </div>
  );
}
