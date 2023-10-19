import {React} from "react";
import { useQuery } from "react-query";


const fetchUsers = async (id) => {
    const res = await fetch('https://localhost:7121/Product/' + id);
    return res.json();
  };

const ListProduct = (props) => {
    const { status, data, error, isFetching} = useQuery(['p'], async () => await fetchUsers(props.id));
    return (    
        <div className="row featured__filter">
        { status === "success" &&
            data.map((item,index) =>{

               return ( 
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style={{backgroundImage:item.imgurl}}>
                    <div className="featured__item">
                            <div className="featured__item__pic set-bg" >
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">{item.name}</a></h6>
                                <h5>${item.price}</h5>
                            </div>
                    </div>      
                </div>
                )     
            })
        }
    </div>
    );
};
export default ListProduct;