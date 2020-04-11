import React, { useState } from 'react';
import Add from './Add'
import { css } from 'emotion';
import datas from "../Humboldttogo.json"
import Delivery from './Delivery';




const Search = (props) => {
    const [delivery, setDelivery] = useState(false)


    const [showlist, setShowlist] = useState(styles.dropdown_content)
    const cities = ["Arcata", "Eureka", "Ferndale", "Fortuna", "Mckinleyville", "Carlotta", "Trinidad", "Rio Dell", "DrWhitethorn"]
    const [city, setCity] = useState("city")
    const [key, setKey] = useState("")




    const handleClick = (event) => {
        event.preventDefault()

        const actualCity = event.target.textContent
        setCity(event.target.textContent)
        props.setValue(event.target.textContent)
        setShowlist(styles.dropdown_content)

        let arr = [];
        if (actualCity ==='All' && !delivery && key.length === 0) {
            props.setRestaurant(datas)
        } else if (key.length > 0 && delivery && actualCity !=='All') {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].City === actualCity && datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)
            }
        } else if (key.length > 0 && !delivery && actualCity !=='All') {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].City === actualCity && datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)
            }
        } else if (key.length === 0 && delivery && actualCity !=='All') {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].City === actualCity && datas[i].Info.includes("Delivery")) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)
            }
        } else if (key.length === 0 && !delivery && actualCity !=='All') {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].City === actualCity) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)

            }
        } else if (actualCity ==='All' && !delivery && key.length > 0) {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase())) {
                    arr.push(datas[i])
                }
            }
            props.setRestaurant(arr)
        }  else if (actualCity ==='All' && delivery && key.length > 0) {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].Keywords.toLowerCase().includes(key.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)

            }
        } else if (actualCity ==='All' && delivery && key.length === 0) {
            for (var i = 0; i < datas.length; i++) {
                if (datas[i].Info.includes("Delivery")) {
                    arr.push(datas[i])
                }
                props.setRestaurant(arr)

            }
        }
    }
        let str = ""
        var getType = (e) => {
            str+=e.currentTarget.value;
            setKey(str)
            let arr = [];
            if (city !== "city" && delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(str.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
            } else if (city !== "city" && !delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(str.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
             } else if (city === "All" && delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Info.includes("Delivery") && datas[i].Keywords.toLowerCase().includes(str.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }  
                props.setRestaurant(arr)
            } else if (city !== "All" && !delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].City === city && datas[i].Keywords.toLowerCase().includes(str.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
            } else if (city === "All"  && !delivery || city === "city"  && !delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(str.toLowerCase())) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
            }
            else if (city === "All" && delivery || city === "city"  && delivery) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].Keywords.toLowerCase().includes(str.toLowerCase()) && datas[i].Info.includes("Delivery")) {
                        arr.push(datas[i])
                    }
                }
                props.setRestaurant(arr)
            }
        }

        const clicking = () => {
            if (showlist === styles.dropdown_content) {
                setShowlist(styles.dropdown_clicked)
                } else {
                    setShowlist(styles.dropdown_content)
                }
        }

    

                            return (
                                <div className={styles.wrappermaster}>
                                    <div className={styles.wrapper}>
                                        <div className={styles.dropdown}>
                                            <button onClick={clicking} className={styles.dropbtn}>{city}</button>
                                            <div className={showlist}>
                                                <a onClick={handleClick} href="">All</a>
                                                <a onClick={handleClick} href="">Arcata</a>
                                                <a onClick={handleClick} href="">Carlotta</a>
                                                <a onClick={handleClick} href="">Eureka</a>
                                                <a onClick={handleClick} href="">Ferndale</a>
                                                <a onClick={handleClick} href="">Fortuna</a>
                                                <a onClick={handleClick} href="">Mckinleyville</a>
                                                <a onClick={handleClick} href="">Redway</a>
                                                <a onClick={handleClick} href="">Orick</a>
                                                <a onClick={handleClick} href="">Rio Dell</a>
                                                <a onClick={handleClick} href="">Trinidad</a>
                                                <a onClick={handleClick} href="">Whitethorn</a>
                                            </div>
                                        </div>
                                        <input onChange={getType} className={styles.typeSearch} placeholder="Search by type, ..." />
                                    </div>
                                    <Delivery iscity={city} iskey={key} res={props.restaurant} setR={props.setRestaurant} del={delivery} setDel={setDelivery} />
                                </div>
                            )
                        }


                        const styles = {
                            wrappermaster: css`
    // background-color: black;
        background-color: #FFFFFF;
        height: 100px;
    `,
                            wrapper: css`
        display: flex;
        justify-content: space-between;
        width:300px ;
        margin-left: 10%;
        div:button {
            height: 100%;
            // width: 100%;
        }
      `,
                            dropdown: css`
        display: inline-block;
        // width: 70px;
    `,
                            dropbtn: css`
        border: 1px outset white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: auto;
        font-family: Georgia, serif;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        outline: none;
        padding: 12px 16px;
        height: 100%; 
        width: 100%;
   `,
                            dropdown_content: css`
      a {  
        font-family: Georgia, serif;
        font-size: 16px;
        margin: 8px;
        display: none;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
    `,
                            dropdown_clicked: css`
        position: absolute;
        background-color: #f9f9f9;
        display:block;
        a {
            width: 80px;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-family: Georgia, serif;
            font-size: 16px;
            margin: 8px;
            background-color: #f9f9f9;
            z-index: 1;
        } a:hover {
            background-color: #f1f1f1;
        } 

        ,`,
                            typeSearch: css`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
        padding-left: 10px;
        background-color: white;
        outline: none;
        width: 60%;
        height: 60px; 
        font-size: 18px;
 
     `,

                            labelInput: css`
    //  margin-left: 40px;
    //  position:absolute;
    //  left: 50%;
     `,
                            deliveryCity: css`
    display: flex;
    flex-direction: column;
     `,

                        }

                        export default Search;
