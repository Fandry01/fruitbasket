import React from 'react';
import './App.css';
import Button from "./Components/Button";

function App() {
    const [Banaancount, setBanaanCounter] = React.useState(0)
    const [Aardbeicount, setAardbeicounter] = React.useState(0)
    const [Applecount, setApplecounter] = React.useState(0)
    const [Kiwicount, setKiwicounter] = React.useState(0)
    const [firstname,setfirstname] = React.useState('')
    const [lastname,setlastname] = React.useState('')
    const [ageValue,setAgeValue] = React.useState(0)
    const [adresValue,setAdresValue] = React.useState('')
    const [radioTimeValue,setRadioTimeValue] = React.useState('')
    const [opmerkingenValue,setopmerkingenValue] = React.useState('')
    const [voorwardenValue,setvoorwaardenValue] = React.useState(false)


    function resetAll(){
        setKiwicounter(0);
        setApplecounter(0);
        setAardbeicounter(0);
        setBanaanCounter(0);
    }
    function handlesubmit(e){
        e.preventDefault()
        console.log(setfirstname,setlastname, setAgeValue,setAdresValue,setAdresValue,radioTimeValue, opmerkingenValue, voorwardenValue)

    }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="artikelen">
            <h2>Banaan</h2>
            <button type="button" onClick={()=>setBanaanCounter(Banaancount + 1)}>+</button>
            <p><strong>{Banaancount.toString()}</strong></p>
            <button type="button" onClick={()=>setBanaanCounter(Banaancount - 1)} disabled={Banaancount === 0}>-</button>
        </div>
        <div className="artikelen">
            <h2>Aardbeien</h2>
            <button type="button" onClick={()=>setAardbeicounter(Aardbeicount + 1)}>+</button>
            <p><strong>{Aardbeicount.toString()}</strong></p>
            <button type="button" onClick={()=>setAardbeicounter(Aardbeicount - 1)} disabled={Aardbeicount === 0}>-</button>
        </div>
        <div className="artikelen">
            <h2>Appels</h2>
            <button type="button" onClick={()=>setApplecounter(Applecount + 1)}>+</button>
            <p><strong>{Applecount.toString()}</strong></p>
            <button type="button" onClick={()=>setApplecounter(Applecount - 1)} disabled={Applecount === 0}>-</button>
        </div>
        <div className="artikelen">
            <h2>Kiwi's</h2>
            <button type="button" onClick={()=>setKiwicounter(Kiwicount + 1)}>+</button>
            <p><strong>{Kiwicount.toString()}</strong></p>
            <button type="button" onClick={()=>setKiwicounter(Kiwicount - 1)} disabled={Kiwicount === 0}>-</button>
        </div>

        <button type="button" onClick={()=>resetAll()}>Reset Alles</button>

        <form onSubmit={handlesubmit}>
            <fieldset>
            <label htmlFor="first-name">Voornaam:</label><br/>
            <input type="text" name="fname" id="first-name" value={firstname}  onChange={(e)=> setfirstname(e.target.value)}/><br/>
            <label htmlFor="last-name">AchterNaam:</label><br/>
            <input type="text" name="fname" id="last-name" value={lastname} onChange={(e)=> setlastname(e.target.value)} /><br/>
            <label htmlFor="age">Leeftijd</label><br/>
            <input type="number" name="age" id="age" value={ageValue} onChange={(e)=> setAgeValue(e.target.value)} /><br/>
            <label htmlFor="adres-field">Postcode</label><br/>
            <input type='text' name="adres" id="adres-field" value={adresValue} onChange={(e)=> setAdresValue(e.target.value)}/><br/>
            <label htmlFor="bezorgen">Bezorg Momenten</label>
                <select name="bezorgen" id="bezorgen"><br/>
                <option value="iedereweek">iedere week</option>
                <option value="omdeweek">om de week</option>
                <option value="iederemaand">iedere maand</option>
            </select><br/>
            <label htmlFor="overdag">Overdag</label>
            <input type="radio" id="overdag" name="overdag" value={radioTimeValue} onChange={(e)=> setRadioTimeValue(e.target.value)}/>
            <label htmlFor="avond">'s avonds</label>
            <input type="radio" id="avond" name="avond" value={radioTimeValue} onChange={(e)=> e.target.value}/><br/>
                <textarea name="opmerkingen" value={opmerkingenValue} onChange={(e)=> setopmerkingenValue(e.target.value)}></textarea><br/>
                <label htmlFor="voorwaarden">akkoord met de voorwaarden</label>
                <input type="checkbox" id="voorwaarden" checked={voorwardenValue} onChange={()=>setvoorwaardenValue(!voorwardenValue)}/><br/>
                <button type="submit">Verzenden</button>
            </fieldset>
        </form>
    </>
  );
}

export default App;
