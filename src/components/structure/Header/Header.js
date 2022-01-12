import React from "react";

import styled from 'styled-components';
import { styles } from "../../../styles/constants";

const HeaderWrapper = styled.header`
    background-color: ${styles.primaryColour};
    box-shadow: ${styles.shadow};
`

const HeaderText = styled.h1`
    width: 100%;
    max-width: ${styles.pageSize}px;
    margin: 0 auto;
    padding: ${styles.size}px;
    color: ${styles.primaryText};
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderText>4C Platform Frontend Technical Test</HeaderText>
        </HeaderWrapper>
    )
}

export default Header;
