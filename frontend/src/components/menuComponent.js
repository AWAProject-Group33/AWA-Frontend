import styles from './menuComponent.module.css';

export default function MenuComponent(props) {
    return (
    <div>
      <h3 style={{color: "Black"}}>{props.foodType}</h3>
      <div className={styles.productsSelection}>
        <p>{props.product}</p>
        <p>{props.price}</p>
        <div className={styles.productQuantity}>
          <input style={{alignSelf: 'center', width: "2em"}} type="number" name="quantity" value="0"></input>
          <button>Add to Cart</button>
          <hr></hr>
          <button>v</button>
        </div>
      </div>
    </div>
    )
      
  }