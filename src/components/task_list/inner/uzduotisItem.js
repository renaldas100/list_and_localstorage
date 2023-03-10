

const UzduotisItem=(props)=>{


    const onIstrintiClick=()=>{
        props.onTrintiUzduoti(props.uzduotis.key);
    };

return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-6">{props.uzduotis.pavadinimas}</div>
            <div className="col-3">{props.uzduotis.tipas}</div>
            <div className="col-3">
                <button className="btn btn-danger" onClick={onIstrintiClick}>Ištrinti</button>
            </div>
        </div>
    </li>
)

}
export default UzduotisItem;