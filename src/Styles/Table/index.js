import styled from "styled-components";
export const TableStyle = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

export const Root = styled.div`
    max-width: 95%;
    margin-inline: auto;
`;


export const Theader = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & input, & select {
        padding: .7rem 2rem;
        border: 1px solid #EFF1F5;
        border-radius: 2rem;
        font-weight: bold;
        color: #A6A6B5;
        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
    & span {
        padding: 1.4rem 2.5rem;
        border-radius: 2.5rem;
        background: #221ECD;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        display:inline-block;
        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;
export const Ttable = styled.div`
    padding: 3rem;
    background: #fff;
    border-radius: 1rem;
`;

export const TbodyStyle = styled.tbody`
    td, th {
        text-align: left;
        padding: 1.7rem;
        font-weight: bold;
        color: #232228;
        &:nth-child(1),&:nth-child(2) {
            width: 150px;
        }
    }


    tr {
        background: #fff;
        &:nth-child(2n) {
            background: #FAFAFC;
        }
    }
`;
export const TheadStyle = styled.thead`
    td, th {
        text-align: left;
        padding: 1rem 2rem;
        font-weight: bold;
        color: #A6A6B5;
        cursor: pointer;
        & div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            & i {
                color: #2F2AB7;
            }
        }
    }
    tr {
        background: #F3F4FB;
    }
`;