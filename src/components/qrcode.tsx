        import React, {useState, useEffect} from 'react';

        type Props = {
            url?: string;
            other?: string;
        }

        const QRCode: React.FC<Props> = (props)  => {
            const QRCode = require('qrcode.react')
            //const [state, setState] = useState(initialState);

            //this states Variables using the ustatehook by react
            const [Name, setName] = useState(props.url);
            /////////////////////////////////////////////////////
            const [message, setMessage] = useState('');
            /////////////////////////////////////////////////////
            const [Url, setUrl] = useState('');
            /////////////////////////////////////////////////////
            const [number, setNumber] = useState('');
            /////////////////////////////////////////////////////
            const [body, setBody] = useState('');
            /////////////////////////////////////////////////////   
            const [subject, setSubject] = useState('');
            /////////////////////////////////////////////////////
            const [mail, setMail] = useState('');
            /////////////////////////////////////////////////////   


        const Messagewriter = (event: any) => {
            setMessage(event.target.value);
        }

        //This function brings about the value of what is inputed in the URL text area
        const GetmyUrl = (event: any) => {
            setUrl(event.target.value);
        }

        //This function brings about the value of what is inputed in the Phone Number text area
        const PutmyNumber = (event: any) => {
            setNumber(event.target.value);
        }

        //function brings about the value of what is inputed in the Email text area
        const PutmyMail = (event: any) => {
            setMail(event.target.value);
        }

        //function brings about the value of what is inputed in the subject text area
        const GetvariousSubject = (event: any) => {
            setSubject(event.target.value);
        }

        //function brings about the value of what is inputed in body set area
        const GettheBody = (event: any) => {
            setBody(event.target.value);
        }

        return (
            <div className="column has-background-danger-dark">
                <div className="column has-background-danger-red">
                    <div>
                        <QRCode value={`SMS:${number}:${message}`} size={256} /> {/*creates a QRcode and this links them to the variables ((number and message)) */}
                    </div>

                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Phone Number..." onInput={PutmyNumber} />{/*Changes the QRcode determined by the input of the user in the phone number text box */}
                        </div>
                    </div>

                    <div className="column has-background-primary" >
                        <div>
                            <QRCode value={`mailto:${mail} Subject=${subject} &body=${body}.`} size={256} />
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Email..." onInput={PutmyMail} />{/*Changes the QRcode determined by the input of the user in the Email text box */}
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Subject..." onInput={GetvariousSubject} />{/*Changes the QRcode determined by the input of the user in the subject text box */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="column has-background-danger-dark">{/*puts the value in a column and chnages the colour */}
                        <div>
                            <QRCode value={`URL = ${Url}`} size={256} />{/*Links the QRcode to the variable ((Url)) */}
                        </div>

                        <div className="field">
                            <label className="label">URL</label>{/*shows the label */}
                            <div className="control">
                                <input className="input" type="text" placeholder="URL..." onInput={GetmyUrl} />{/*Changes the QRcode determined by the input of the user in the URL text box */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
}


export default QRCode;