import React, { useState, useEffect, useRef } from 'react';
import { TbodyStyle, TableStyle, TheadStyle, Theader, Ttable } from "../../Styles/Table"
import Pagination from "../Pagination";

const Table = ({ children, download, data = [], title, filter, only }) => {
    const [text, setText] = useState(Object.keys(data[0]).filter(item => {
        if (filter && !filter.split(',').includes(item)) {
            return item;
        } else if (only && only.split(',').includes(item)) {
            return item;
        }
    }).join(','));
    const orders = {
        desc: (a, b, k) => (a[k] < b[k] ? 1 : a[k] > b[k] ? -1 : 0),
        asc: (a, b, k) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0)
    };
    const item = {
        asc: '<i class="fa fa-arrow-up"></i>',
        desc: '<i class="fa fa-arrow-down"></i>',
    }
    const sortBy = (arr, k, order = "desc") => arr.concat().sort((a, b) => orders[order](a, b, k));
    const [search, setSearch] = useState(sortBy(data, "id"));
    const [odr, setOdr] = useState({
        name: "id",
        order: "desc"
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = search ? search.slice(indexOfFirstPost, indexOfLastPost) : [];

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const Field = text.split(',');
    const handleChange = (event) => {
        const cloneData = [...data]
        const inputSearch = event.target.value.toLowerCase();
        let regex = '^(?:.*)';
        for (const i in inputSearch) {
            regex += `(${inputSearch[i]})(?:.*)`;
        }
        regex += '$';
        regex = new RegExp(regex, 'gmi');
        const serch = cloneData.filter(
            elem => {
                for (let index = 0; index < Field.length; index++) {
                    let element = (typeof elem[Field[index]] == "object") ? JSON.stringify(elem[Field[index]]) : elem[Field[index]];
                    if (element && element.toString()?.match(regex)) {
                        return elem
                    }
                }
            }
        )
        setSearch(serch);
        setCurrentPage(1);
    }


    const handleSort = (value) => {
        const order = (odr.name === value && odr.order === "desc") ? { name: odr.name, order: "asc" } : { name: value, order: "desc" };
        console.log(order);
        setSearch(sortBy(data, order.name, order.order))
        setOdr(order);
    }
    return <Ttable>
        {title && <h1>{title}</h1>}
        <Theader>
            <div>
                <select value={postsPerPage} onChange={e => setPostsPerPage(e.target.value)}>
                    {[10, 25, 50, 100].map(item => <option value={item} >Show {item} rows</option>)}
                </select> <br/><br/>
                <input type="text" value={text} onChange={event => setText(text => event.target.value)} />
                <input type="text" placeholder="Search....," onChange={handleChange} />
            </div>
            <div>
                
                {download && <span onClick={(e) => download()}>
                    Download Data
                </span>}
            </div>
        </Theader>
        <TableStyle>
            <TheadStyle>
                <tr>
                    <th>action</th>
                    {
                        Field && Field.map(td => <td onClick={() => handleSort(td)}><div dangerouslySetInnerHTML={{ __html: `<span>${td}</span>${td === odr.name ? item[odr.order] : ''}` }} /></td>)
                    }
                </tr>
            </TheadStyle>

            <TbodyStyle>
                {(typeof children == "function" ? children(currentPosts, Field) : children)}
            </TbodyStyle>
        </TableStyle>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={search && search.length}
            paginate={paginate}
            currentPage={currentPage}
        />
    </Ttable>
}
export default Table;