import Kortele from "../../user_interface/kortele";
import { useState } from "react";


const PridetiUzduoti=(props)=>{

const initValue={
    pavadinimas:"",
    tipas:"pasirinkti"
};

const [uzduotis, setUzduotis]=useState(initValue);



const onFormSubmit=(event)=>{
    event.preventDefault();
    props.onPridetiUzduoti(uzduotis);
    setUzduotis(initValue);


}

const onPavadinimasChange=(event)=>{
setUzduotis({
    ...uzduotis,
    pavadinimas: event.target.value,
})
}

const onTipasChange=(event)=>{
        setUzduotis({
            ...uzduotis,
            tipas: event.target.value,
        })
    }

return (

    <Kortele title="Pridėti naują užduotį">
       <form onSubmit={onFormSubmit}>
           <div>
               <label className="form-label">Užduotis</label>
               <input type="text" className="form-control" onChange={onPavadinimasChange} value={uzduotis.pavadinimas} />
           </div>
           <div>
               <label className="form-label mt-4">Užduoties tipas</label> <br />
               {/*<input type="text" className="form-control" onChange={onTipasChange} value={uzduotis.tipas} />*/}
               <select style={{width:"250px", height:"50px", fontSize:"20px", background:"#343a40", color:"gold", borderRadius:"15px 15px 0px 0px", paddingLeft:"15px"}} onChange={onTipasChange} value={uzduotis.tipas}>
                   <option value={"pasirinkti"}>Pasirinkite kategoriją</option>
                   <option value={"Neskubus"}>Neskubus</option>
                   <option value={"Rutininis"}>Rutininis</option>
                   <option value={"Skubus"}>Skubus</option>
                   <option value={"Ypač skubus"}>Ypač skubus</option>
               </select>

           </div>
           <button className="btn btn-success mt-4">Pridėti užduotį</button>



       </form>

    </Kortele>

)


}
export default PridetiUzduoti;