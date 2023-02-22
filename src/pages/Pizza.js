import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { Link } from "react-router-dom";



// pop ups
import Pep from "./popUpPages/Pep.js";
import Marg from "./popUpPages/Marg.js";





const Pizza = () => {
    

    const [showPep, setShowPep] = useState(false);
    const togglePep = () => {
      setShowPep(!showPep);
    };
  
    const [showMarg, setShowMarg] = useState(false);
    const toggleMarg = () => {
        setShowMarg(!showMarg);
      };
      

    return (
      <> 
        <div className="pagesSection">
            <h2>Traditional Pizza</h2> 
        </div>
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>

                            {/* Pepperoni  */}
                            <div className="boxMargin">
                                <a onClick={togglePep}><img src={require('../components/assets/images/pizza/pep.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a onClick={togglePep}>Pepperoni</a>
                                    </div>
                            </div>
                            {showPep && <Pep onClose={togglePep} />}


                        
                            <div className="boxMargin">
                                <a onClick={toggleMarg}><img src={require('../components/assets/images/pizza/mar.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                    <a onClick={toggleMarg}>Margherita</a>
                                    </div>
                            </div>
                            {showMarg && <Marg onClose={toggleMarg} />}
                        
                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/meat.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">All Meat</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/sup.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Supreme</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/veg.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Vegetarian</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/chick.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Chicken</Link></a>
                                    </div>
                            </div>

                        </div>
                    </div>
            </div>

            <div className="pagesSection">
            <h2>Gourmet Pizza</h2> 
        </div>
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>

                        
                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/cream.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Cream Chicken</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/gveg.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Gourmet Veg</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/sea.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Seafood</Link></a>
                                    </div>
                            </div>

                            <div className="boxMargin">
                                <a href="" target="_blank"><img src={require('../components/assets/images/pizza/prawn.jpg')} alt="Circle WebSite"/></a>
                                    <div className="productName">
                                        <a><Link to="/">Prawn Special</Link></a>
                                    </div>
                            </div>
                        
                        </div>
                    </div>
            </div>
      </>
    );
  };
  
  export default Pizza;