import styled from 'styled-components';

export const Coupon = styled.div`
        font-size: 0.7rem;
        font-weight: bolder;
        border:2px
        solid ${(props) => props.color || "#ff0000"};;
        text-align: center;
        margin-left:auto; 
        margin-right:auto;
        width: 50%;
        padding: 0.5rem 0.5rem;
        border-radius: 2px;
`;

export const Table = styled.table`
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
`;

export const Td = styled.td`
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
`;

export const Th = styled.th`
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
`;

export const Select = styled.select`
        width: 150px;
        height: 30px;
        padding-left: 5px;
        font-size: 15px;
        color:red;
        border: 1px solid red;
        border-radius: 3px;
`;
