import React from "react"
export function Header(props) {
    return (
        <div style={{ paddingBottom: '45px', width: '1400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div><img src="/Group.png" /></div>
                <div><p className="header_paragraph">{props.number}/4</p></div>
            </div>
            <hr />
        </div>
    )
}