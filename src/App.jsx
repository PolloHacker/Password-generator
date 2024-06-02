import { useState } from "react";
import GenButton from "./components/gen_button";
import Options from "./components/options";
import PassDisplay from "./components/pass_display";
import PassStrength from "./components/pass_strength";
import generatePassword from "./components/generatePassword";


export default function App() {
  const [password, setPassword] = useState('PTx1f5DaFX');
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [passwordLength, setPasswordLength] = useState(10);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength, options);
    setPassword(newPassword);
  };

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  const handlePasswordLengthChange = (length) => {
    setPasswordLength(length);
  };

  return (
    <div className='app-container'>
        <span className='app-title'>Password Generator</span>
        <PassDisplay password={password}/>
        <div className='main-container'>
            <Options 
              options={options}
              onOptionsChange={handleOptionsChange}
              passwordLength={passwordLength}
              onPasswordLengthChange={handlePasswordLengthChange}
            />
            <PassStrength />
            <GenButton onGenerate={handleGeneratePassword}/>
        </div>
    </div>
  );
}