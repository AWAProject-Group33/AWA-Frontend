export default function CreatePlace() {
    return (
        <div style={{display: "table-caption", padding: "50px"}}>
            <p>image</p>
            <label>Place Name<input type="text"></input></label>
            <label>Address<input type="text"></input></label>
            <label>Operating Hour<input type="text"></input></label>
            <label>Price Average<input type="text"></input></label>
            <select>
                <option value="Buffet">Type</option>
                <option value="Buffet">Buffet</option>
                <option value="FastFood">Fast Food</option>
                <option value="FastCasual">Fast Casual</option>
                <option value="CasualDinning">Casual Dinning</option>
                <option value="FineDinning">Fine Dinning</option>
            </select>
            <button>Create Restaurant</button>
        </div>
    );
}