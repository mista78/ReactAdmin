import React, {useState, useEffect, useRef, Fragment} from 'react';
import axios from "axios";
import Loader from "react-spinner-loader";
import Table from '../../Components/Table';
import Modal from "../../Components/Modal";
import DataUrl from "../../Services/Urls";
import {GenerateUrl} from "../../Services/Tools";
import { Root } from "../../Styles/Table";
const Jobstats = () => {
    const [response, setResponse] = useState();
    const [load, setLoad] = useState(false);
    const RequestUrl = GenerateUrl(DataUrl.Jobstats);
    const modalref = useRef(response ? [...response.map(elem => React.createRef())] : [React.createRef()]);
    useEffect(async () => {
            const req = await axios.get(RequestUrl.get.all_jobstats);
            setResponse(req.data);
            setTimeout(() => {setLoad(true)},1500);
    }, []);

    const handLeDownload = data => {
        const dataJson = [...data.map(item => JSON.parse(item.json_data.replace('?','')))];
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
        <h1>Jobstatus</h1>
        {
            (load && response.length > 0) ? <Table data={response} only={`id,code,status,start_at,end_at`}>
                {(data, fields) => <Fragment>
                    {data.map((item, i) => <tr>
                        <td></td>
                        {fields.map(field => <td>{`${(typeof item[field] == "object") ? item[field]?.rendered : item[field]}`}</td>)}
                    </tr>)}
                </Fragment>}
            </Table> : <div className="rotate"></div>
        }
    </Root>
}

export default Jobstats;