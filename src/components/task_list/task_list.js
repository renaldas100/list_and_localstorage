import UzduociuSarasas from "./inner/uzduociuSarasas";
import PridetiUzduoti from "./inner/pridetiUzduoti";

import {useState, useEffect} from "react";

const TaskList=(props)=>{
let initUzduotys=[
    // {pavadinimas:"", tipas:""},

]
    useEffect(()=>{
        const data=localStorage.getItem("uzduotys")
        if(data!=null) {
            const initUzduotys = JSON.parse(data);
            setUzduotys(initUzduotys);
            // console.log(initUzduotys);
            props.updateKiekis(initUzduotys.length);
        }
    },[]);


     // const data=localStorage.getItem("uzduotys")
     // if(data!=null) {
     //     initUzduotys = JSON.parse(data);
     //     console.log("uzkrauna")
     // }


    const [uzduotys, setUzduotys]=useState(initUzduotys);

    const issaugotiUzduotis=()=>{
        localStorage.setItem("uzduotys", JSON.stringify(uzduotys))

    };

    const pridetiUzduoti=(uzduotis)=>{
        uzduotys.push(uzduotis);
        issaugotiUzduotis();
        setUzduotys(Array.from(uzduotys));
        props.updateKiekis(uzduotys.length);
    };

    const trintiUzduoti=(index)=>{
        uzduotys.splice(index,1);
        issaugotiUzduotis();
        setUzduotys(Array.from(uzduotys));
        props.updateKiekis(uzduotys.length);
    };

    return(
        <div className="row">
            <div className="col-6">
                <PridetiUzduoti onPridetiUzduoti={pridetiUzduoti}></PridetiUzduoti>
            </div>
            <div className="col-6">
                <UzduociuSarasas uzduotys={uzduotys} onTrintiUzduoti={trintiUzduoti}></UzduociuSarasas>
            </div>
        </div>
    )
}
export default TaskList;