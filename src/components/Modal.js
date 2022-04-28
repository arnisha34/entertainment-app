import React from 'react'
import { Context } from './Context'
import styled from 'styled-components'
import { useContext } from 'react'

export default function Modal() {
  
  const ctx = useContext(Context)

  return (
    <>
      <ModalInner>
        <iframe id='video' width="1024" height="768" src={`${ctx.videoURL}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ModalInner> 
    </>
  )
}

const ModalInner = styled.div`

  @media screen and (max-width: 1024px){
    iframe{
      width: 854px;
      height: 480px
    }
  }

  @media screen and (max-width: 768px){
    iframe{
      width: 640px;
      height: 360px
    }
  }

  @media screen and (max-width: 576px){
    iframe{
      width: 426px;
      height: 240px
    }
  }
`