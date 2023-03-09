import React, {useState, useEffect, useRef, Fragment} from 'react';
import axios from "axios";
import Loader from "react-spinner-loader";
import Table from '../../Components/Table';
import Modal from "../../Components/Modal";
import DataUrl from "../../Services/Urls";
import {GenerateUrl} from "../../Services/Tools";
import { Root } from "../../Styles/Table";
const Contactform = () => {
    const [response, setResponse] = useState();
    const [load, setLoad] = useState(false);
    const RequestUrl = GenerateUrl(DataUrl.ContactfForm);
    const modalref = useRef(response ? [...response.map(elem => React.createRef())] : [React.createRef()]);
    useEffect(async () => {
            const req = await axios.get(RequestUrl.get.all_cegosform);
            setResponse(req.data);
            setTimeout(() => {setLoad(true)},1500);
    }, []);

    const handLeDownload = data => {
        const dataJson = [...data.map(item => ({url: item.url, ...JSON.parse(item.json_data.replace('?',''))}))];
        const replacer = (key, value) => value === null ? '' : value;
        const header = Object.keys(dataJson[0]);
        const csv = [
            header.join(','),
            ...dataJson.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        ].join('\r\n')
        var downloadLink = document.createElement("a");
        var blob = new Blob(["\ufeff", csv]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "data.csv";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    useEffect(() => {
        response && console.log(response);
    },[response])
    return <Root>
        <h1>Forms</h1>
        {
            (load && response.length > 0) ? <Table download={() => handLeDownload(response)} data={response} only={`id,name,url${window.location.origin.includes('.it') ? ',status': ''}`}>
                {(data, fields) => <Fragment>
                    {data.map((item, i) => <tr>
                        <td>
                            <Modal size="570px" icons="edit" ref={modalref.current[i]} fade={true}>
                                {Object.keys(JSON.parse(item.json_data)).map((elem, index) => ((elem !== "eloqua") ? <p key={index} dangerouslySetInnerHTML={{__html: `<strong>${elem}</strong> : ${JSON.parse(item.json_data)[elem]}`}} /> : ''))}
                            </Modal>
                        </td>
                        {fields.map(field => <td>{`${(typeof item[field] == "object") ? item[field]?.rendered : item[field]}`}</td>)}
                    </tr>)}
                </Fragment>}
            </Table> : <div className="rotate"></div>
        }
    </Root>
}

export default Contactform;