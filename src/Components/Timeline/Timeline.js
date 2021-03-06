
import React, {Component} from "react";
import TimelineItem from './TimelineItem'
import "./Timeline.css";    
class Timeline extends Component { 
    render(){
    const timelineData = [
        {
            txt: 'AP Computer Science Principles',
            date: '2017',
            category: {
                tag: 'CodeHs',
                color: '#f3f3f3'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            txt: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://google.com',
                text: 'Read more'
            }
        },
        {
            txt: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            txt: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            txt: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            txt: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        }
    ];
    return (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem 
                color={data.category.color}
                tag={data.category.tag}
                txt={data.txt}
                date={data.date} 
                link={data.link}
                url={data.link.url}
                text={data.link.text}
                key={idx}
                 />
            ))}
        <div className="backgound-timeline"></div>
        </div>
    );
            }
        }
export default Timeline;

