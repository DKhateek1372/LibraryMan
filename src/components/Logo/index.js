import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Images from '../../theme/images';

const UiLogo = styled.img`
    width: ${props => (!!props.theme.size ? props.theme.size : '150')}px;
    height: ${props => (!!props.theme.size ? props.theme.size : 'auto')};
    cursor: pointer;
    @media screen and (min-width: 640px) {
        width: ${props => (!!props.theme.size ? props.theme.size : '28')}%;
    }
`;

const Logo = props => {
    let { style, onClick } = props;
    return (
        <Row style={props.className === 'homeLogoMargin' ? {} : { textAlign: 'center' }}>
            <UiLogo
                alt=""
                className={props.className}
                src={props.color === 'white' ? Images.logo_white : Images.logo}
                theme={{ ...this.props }}
                style={style}
                onClick={onClick}
            />
        </Row>
    );
};

export default Logo;
