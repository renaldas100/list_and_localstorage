import Kortele from "../../user_interface/kortele";
import UzduotisItem from "./uzduotisItem";


const UzduociuSarasas=(props)=>{



let uzduociuSarasas=[];
props.uzduotys.forEach((uzduotis, index)=>{
    uzduociuSarasas.push(
        (<UzduotisItem key={index} uzduotis={ {...uzduotis, key:index} } onTrintiUzduoti={props.onTrintiUzduoti}></UzduotisItem>)
    );
})
return (

    <Kortele title="Užduočių sąrašas">
        <ul className="list-group">
            {uzduociuSarasas}

        </ul>

    </Kortele>

)

}
export default UzduociuSarasas;