import React from 'react'
import PropType from 'prop-types';
// styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

HeroImage.propType = {
    image: PropType.string,
    title: PropType.string,
    text: PropType.string
}

export default HeroImage;