import React, {useState} from "react";

const Parent = ({children, ...props}) => {
    console.log("Parent",props);
    return <div>
        {children}
        <h1>Parent</h1>
    </div>
};

const Edit = () => {
    const [state, lorem] = useState();
    return <div>
        <input type="text" value={state} onChange={e => lorem(e.target.value)} />
        <h1>Edit {state}</h1>
        <Parent state={state} lorem="lorem">
            {[1,2,3,4,5].map((item, index) => {
                return <h1 key={item}>{item}</h1>
            })}
        </Parent>
    </div>;
};

export default Edit;