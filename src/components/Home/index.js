import React,{useEffect, useState} from 'react';
import SimpleSlider from '../Slider';
import CardDetails from '../Card'
import { homeProductsAPI } from '../../Ultis/Apis';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProduct, getProducts } from '../../actions';
import Footer from '../Footer';
import Features from '../Features';
import Loading from '../Loading';

const Home = (props) => {
  const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   axios(homeProductsAPI).then(res=> props.sendProducts(res.data))
    // }, []);

    
    useEffect(() => {
      async function getUser() {
        try {
          const response = await axios.get(homeProductsAPI);
          const data = response.data
          console.log(data)
          props.sendProducts(data)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
      getUser()
    }, []);
    
    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
  
    return ( <>
    <SimpleSlider />
    <Features />
     <div className="mainProducts">
        {props.products?.map((items)=> <CardDetails {...items}  addProduct={()=> props.addProductToCart(items)} />)}
        {/* {product?.slice(5,10).map((items)=> <Accessories {...items} />)} */}
     </div>
     <Footer />
    </> );
}
 
const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  addProductToCart: (payload) => dispatch(addProduct(payload),)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
