import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa fa-hand-peace-o fa-spin"></span>
        </div>
        <div >
            <div className="inner">
                <h1>For the</h1>
                <h1>5SE Peeps</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}><span className="icon fa-key fa-flip-horizontal"></span></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}><span className="icon fa-heart"></span></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}><span className="icon fa-cutlery"></span></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}><span className="icon fa-bullhorn"></span></a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
