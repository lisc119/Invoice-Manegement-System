import React, {useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { colors } from "../../style/Theme";
import { tagCreateAction } from "../../store/actions/tagCreateAction";

const TagCreateContainer = styled.div`
// align-self: center;
  .publish {
    background-color: #ffffff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    input {
      border: none;
      color: #000000;
      opacity: 0.5;
      width: 65%;
      line-height: 26px;
    }
    button {
      width: 50px;
      height: 50px;
      background: ${colors.yellow};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        color: white;
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default function TagCreate() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const placeholder = "Tag Name"

  const handleClick = () => {
    const text = inputRef.current.value;

    const body = {
      title: text,
    };

    dispatch(tagCreateAction(body));
    inputRef.current.value = placeholder;
  };

  return (
    <TagCreateContainer>
      <div className="publish">
        <input ref={inputRef} type="text" placeholder={placeholder}/>
        <button onClick={handleClick}>Add Tag
        </button>
      </div>
    </TagCreateContainer>
  );
}
