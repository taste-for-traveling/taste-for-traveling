import React from 'react'

const PlayIcon = (props) => {
    const fillColor = props.fill ? props.fill : "#b20000"
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" className={props.className} aria-label="Play" role="img">
            <g id="Group_357" data-name="Group 357" transform="translate(-1589.658 -721.658)">
                <circle id="Ellipse_12" data-name="Ellipse 12" cx="52.5" cy="52.5" r="52.5" transform="translate(1589.658 721.658)" fill={fillColor} />
                <path id="Polygon_1" data-name="Polygon 1" d="M30.626,0,61.253,51.116H0Z" transform="translate(1675.968 743.464) rotate(90)" fill="#fff" />
            </g>
        </svg>
    )
}

export default PlayIcon