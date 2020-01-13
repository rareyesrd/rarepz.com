import React from "react";

const TimelineItem = ({color, tag, date, link, txt, url, text}) =>{ 
    return(
    <div className="timeline-item">
        <div className="timeline-item-content">
        <span className="tag" style={{ background: color}}>
            {tag}
        </span>
            <time>{date}</time>
            <p>{txt}</p>
                {link && (<a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
                )}
            <span className="circle" />
        </div>
    </div>
);
}
export default TimelineItem;