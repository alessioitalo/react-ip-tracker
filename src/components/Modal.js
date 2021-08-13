import React from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
width: 100%;
height: 100%;
background: hsla(0, 0%, 17%, 0.5);
position: absolute;
top: 0;
left: 0;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
`

function Modal(props) {
    return (
        <StyledModal>
            {props.children}
        </StyledModal>
    )
}

export default Modal
