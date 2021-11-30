import React from 'react'
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
//syles
import { Wrapper, Content } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes = {
    movieTitle: PropType.string
}

export default BreadCrumb;