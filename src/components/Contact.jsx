import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { css } from 'emotion'
import Header from './Header'
import axios from 'axios';


const Contact = (props) => {
    const [sent, setSent] = useState("Send a message to add or update your business information");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        return () => {
            props.setAdc(false)
            props.history.push('/');
        }
    })

    const goBack = () => {
        props.setAdc(false)
        props.history.push('/')
        props.setAdc(false)

    }


    const send = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message
        };


        axios.post("/api/v1", data, {

        })
            .then(res => {
                setName("");
                setMessage("");
                setEmail("");
                setSent("Message sent! I will make the updated ASAP =)")
            })
            .catch((error) => {
                console.log(error, 'Message not sent')
            })

    }

    const emptySent = () => {
        setSent("")
    }

    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
    }


    const handleChangeMessage = (event) => {
        setMessage(event.currentTarget.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value)
    }

    return (
        <div>
            <Header />
            <h4 className={styles.sent}>{sent}</h4>
            <button onClick={goBack} className={styles.goBack}> Go Back </button>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <form action="/action_page.php">
                        <label > Your name</label>
                        <input onClick={emptySent} onChange={handleChangeName} className={styles.same} type="text" name="firstname" placeholder="Your Name" value={name} />
                        <label > E-mail</label>
                        <input onClick={emptySent} onChange={handleChangeEmail} className={styles.same} type="text" name="email" placeholder="Your Email" value={email} />
                        <label > Message</label>
                        <textarea onClick={emptySent} onChange={handleChangeMessage} className={styles.same} name="subject" placeholder="What would you like to add/remove or update?" value={message}></textarea>
                        <button onClick={send} className={styles.b} type="submit" value="Submit"> Send </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


const styles = {
    wrapper: css`
        height: 100vh;
        color: white;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        background-color: #2F4F4F;
    `,
    same: css`
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
}
    `,
    b: css`
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background-color: #45a049;
        }
    `,
    sent: css`
    color: black;
    text-align: center;
    `,
    goBack: css`
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    margin-left: 20px;
    `

}

export default withRouter(Contact);
