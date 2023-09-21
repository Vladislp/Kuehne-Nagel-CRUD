import React from "react";
import './crud.css';
import CallKuehne from "../../api-call/api-call";


const CrudTable = () => {
    return (
        <div className="crud-page-content">
            <div className="crud">
                <CallKuehne />
            </div>
        </div>
    );
};

export default CrudTable;