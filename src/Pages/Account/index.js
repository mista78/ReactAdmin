import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from "axios";
import Table from '../../Components/Table';
import Modal from "../../Components/Modal";
import DataUrl from "../../Services/Urls";
import {GenerateUrl} from "../../Services/Tools";
import { Root } from "../../Styles/Table";

const Account = () => {
    const [response, setResponse] = useState();
    const [load, setLoad] = useState(false);
    const modalref = useRef(response ? [...response.map(elem => React.createRef())] : [React.createRef()]);
    const RequestUrl = GenerateUrl(DataUrl.Account,["POST", "GET"]);
    useEffect(async () => {
        const req = await axios.get(RequestUrl.get.all_account);
        console.log(req.data);
        setResponse(req.data);
        setTimeout(() => { setLoad(true) }, 1500);
    }, [])
    return (
        <Root>
            <h1>Accounts</h1>
            {
                (load && response.length > 0) ? <Table data={response} only={`id,created_at,email,is_enabled`}>
                    {(data, fields) => <Fragment>
                        {data.map((item, i) => <tr>
                            <td>
                                <Modal size="570px" icons="edit" ref={modalref.current[i]} fade={true}>
                                    {/* {Object.keys(JSON.parse(item.json_data)).map((elem, index) => ((elem !== "eloqua") ? <p key={index} dangerouslySetInnerHTML={{ __html: `<strong>${elem}</strong> : ${JSON.parse(item.json_data)[elem]}` }} /> : ''))} */}
                                </Modal>
                            </td>
                            {fields.map(field => <td>{`${(typeof item[field] == "object") ? item[field]?.rendered : item[field]}`}</td>)}
                        </tr>)}
                    </Fragment>}
                </Table> : <div>Chargement....</div>
            }
        </Root>
    )
}

export default Account;