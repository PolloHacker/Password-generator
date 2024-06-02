import Checkbox from "./checkbox";

export default function Options() {
    return (<>
        <div>
            <span>Character Length</span>
            <span>10</span>
            <input type="range"></input>
        </div>
        <div className="options">
            <Checkbox labelfor="uppercase letters" checked={true} onChange={() => { }} />
            <Checkbox labelfor="lowercase letters" checked={true} onChange={() => { }} />
            <Checkbox labelfor="numbers" checked={true} onChange={() => { }} />
            <Checkbox labelfor="symbols" checked={false} onChange={() => { }} />
        </div>
    </>
    )
}