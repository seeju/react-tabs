import React from 'react'; 
import {useState} from 'react';;

export const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab (newActiveTab);
    }
    return (
        <>
        <div>
            <ul className='Tabs'>
                {children.map((tab) => (
                <li className={tab.props.label == activeTab ? 'current' :""} key={tab.props.label}>
                    <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
                </li>
                ))}
            </ul>
        </div>

            {children.map((child) => {
                if (child.props.label == activeTab)
                    return (
                        <div key={child.props.label} className='Content'>
                        {child.props.children}
                        </div>
                    );
            })} 
        </>

    )
}


