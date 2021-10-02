import React from 'react'
import styled from 'styled-components'

interface ImageDetailProps {
  imageUrl: string
}

function ImageDetail({imageUrl} : ImageDetailProps) {
  return (
    <Container>

      <ImageWrapper>
        <StyledImage src={imageUrl}/>
      </ImageWrapper>

      <CloseIconWrapper>
        <CloseIcon src="/images/close-icon.png"/>
      </CloseIconWrapper>


    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  position: relative;
  backdrop-filter: blur(40px);  // bg 컬러가 있는 컴포넌트만 먹힘.
`

const ImageWrapper = styled.div``

const StyledImage = styled.img`
  width: 100%;
`

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
`

export default ImageDetail