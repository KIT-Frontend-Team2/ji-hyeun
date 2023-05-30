import React from "react";
import AddTimeline from "./timeline/add-list";
import TimelineList from "./timeline/timline-list";

// import Pagy from "../components/pagination/pagination";

// 중간 컴포넌트
// 이 컴포넌트는 메개변수를 사욯하지 않음 -->전역관리 필요
const MainPage = () => {
  // timeline={timeline} setTimeline={setTimeline}

  return (
    <div>
      <TimelineList />
      <AddTimeline />
    </div>
  );
  // 타이틀
  // 뿌려진 ontimeline 노출
  // 게시글추가 버튼 , css로 화면 우측으로 이동
};

export default MainPage;
