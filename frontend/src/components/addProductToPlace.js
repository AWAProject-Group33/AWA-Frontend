export default function addProductToPlace() {
    return (
    <div>
        
        <div style={{display: "table-caption", padding: "50px"}}>
            <select>
                <option value="Restaurant">Luigi´s</option>
            </select>
            <p>image</p>
            
            <label>Product Name<input type="text"></input></label>
            <label>Price<input type="number"></input></label>
            <label>Description<input type="text"></input></label>
            <button>Add Product</button>
        </div>
    </div>
    );
}