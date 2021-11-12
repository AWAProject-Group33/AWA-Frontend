import styles from './cartComponent.module.css';

export default function CartComponent() {
    return (
      <div className={styles.Container}>
        <h3>SHOPPING CART</h3>
        <spam style={{paddingLeft: "5px"}}>
            <button>See detailed</button>
            <button>Make Payment</button>
        </spam>
      </div>
    )
      
  }