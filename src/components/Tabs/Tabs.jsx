import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
    const [tabs] = useState([
        { content: "Tab 1 content", title: 'Tab 1' },
        { content: "Tab 2 content", title: 'Tab 2' },
        { content: "Tab 3 content", title: 'Tab 3' }
    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    const changeActive = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='tabcontainer'>
            <div className="titles">
                {tabs.map((tab, index) => (
                    <a
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => changeActive(index)}
                    >
                        {tab.title}
                    </a>
                ))}
            </div>
            <div className="content">
                {activeIndex === null ?
                    (<p>Click a tab to see its content!</p>) :
                    (<p>{tabs[activeIndex].content}</p>)
                }
            </div>
        </div>
    );
}

export default Tabs;
