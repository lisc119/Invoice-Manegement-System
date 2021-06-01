import React, { Fragment, useEffect } from "react";
import { StandardWindow } from "../../style/Container";
import { useSelector, useDispatch } from "react-redux";
import { tagListAction } from "../../store/actions/tagListAction";
import TagCreate from "./tagCreate";
import styled from "styled-components";

const TagListContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export default function TagsInfo() {
  const list = useSelector((state) => state.tag.tags);
  console.log("list of tags: ", list);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!list) {
      dispatch(tagListAction);
    }
  }, []);

  if (!list) {
    return <p>Loading page...</p>;
  }

  return (
    <Fragment>
      <StandardWindow>
        <TagListContainer>
          <TagCreate />
          {list.map((tag) => {
            return <div key={tag.id}>{tag.title}</div>;
          })}
        </TagListContainer>
      </StandardWindow>
    </Fragment>
  );
}
