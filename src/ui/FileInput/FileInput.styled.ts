import styled from "styled-components";

const FileInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Images = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 150px;
  overflow-y: auto;
  width: 100%;
  gap: 20px;

  img {
    height: 100px;
    width: auto;
  }

  .deleteIcon {
    position: absolute;
    top: 0;
    right: 0;
    color: black;

    &:hover {
      cursor: pointer;
    }
    
`

const ImageWrap = styled.div`
  position: relative;
  padding: 20px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: black;
`


export {FileInputStyled, ImageWrap, Images, Row}