import React from "react";
import "../App.css";
import "./css/menu.css";
import { Link } from 'react-router-dom';

const Pizza = () => {
  
    return (
      <> 
        <div className="pagesSection">
            <h2>Traditional Pizza</h2> 
        </div>
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>

                            <a>
                                <div>
                                    <a href="" target="_blank"><img src={require('../components/assets/images/pizza/pep.jpg')} alt="Circle WebSite"/></a>
                                        <div className="productName">
                                            <a><Link to="/">Pepperoni</Link></a>
                                        </div>
                                </div>
                            </a>

                        </div>
                    </div>
            </div>
      </>
    );
  };
  
  export default Pizza;