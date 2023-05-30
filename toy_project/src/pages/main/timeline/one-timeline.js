import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTimeline } from "../../../context/timeline";
import { useState } from "react";
import {
  faBan,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { useTimeline } from '../../../context/timeline';

// 객체를 전달받는다.
const OneTimeline = ({ post }) => {
  const [isEditMode, setEditMode] = useState(false);

  const [TimeLineList, dispatch] = useTimeline();

  // const [content, setContent] = useState(post.post_content);
  // const [isEditMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!isEditMode);
  };

  // textarea의 값을 받아와서 다시 넣어주기
  const onChangeText = (e, isEditMode, id) => {
    dispatch({
      type: "CHANGE",
      payload: { e, isEditMode, id },
    });
    // const newContent = e.target.value;
    // if (isEditMode) {
    //   setContent(newContent);
    // }
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <S.Wrapper>
      <S.Header>
        {/* <S.StateBox >
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox> // 여기까지가 이미지 캐러셀 */}
      </S.Header>
      <S.Content>
        <S.Title>
          {post.user_name}
          <FontAwesomeIcon icon={faHeart} />
        </S.Title>
        <S.Section>
          <div>
            <div>
              <FontAwesomeIcon icon={faSquarePlus} onClick={handleEditMode} />
              <FontAwesomeIcon
                icon={faBan}
                onClick={() => handleDelete(post.postId)}
              />
            </div>
          </div>

          {isEditMode ? (
            <textarea
              defaultValue={isEditMode ? post.post_content : ""}
              onChange={(e) => onChangeText(e, isEditMode, post.postId)}
            ></textarea>
          ) : (
            post.post_content
          )}
          {/* {isEditMode ? <textarea value={content}></textarea> : content}  // 댓글  */}
        </S.Section>

        <li>
          {post.post_date
            ? `${post.post_date.getFullYear()}-${
                post.post_date.getMonth() + 1
              }-${post.post_date.getDate()}`
            : "날짜 정보 없음"}
        </li>
      </S.Content>
    </S.Wrapper>
  );
};

//onChange={handleChangeContent}

export default OneTimeline;

const Wrapper = styled.li`
  border: 1px solid ${({ theme }) => theme.PALETTE.glay};
`;

const Header = styled.div`
  border: 1px solid ${({ theme }) => theme.PALETTE.glay};
`;

const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.PALETTE.glay};
`;

const Title = styled.h1`
  border: 1px solid ${({ theme }) => theme.PALETTE.glay};
`;

const Section = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  Content,
  Title,
  Section,
};
