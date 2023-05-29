
import { POST_DATA } from '../../../data/post';
import OneTimeline from './one-timeline';

// 타임라인 폴더를 따로뺼 필요가 있을까?? 
  // one-timeline이 뿌려지는 컴포넌트
  // {timeline,setTimeline}
const TimelineList = ({timeline,setTimeline}) => {
  console.log(`뿌려주는 컴ㅍ노넌트 확인 `, timeline)

 
  // const handleDelete = (postId) => {
  //   const _POST_DATA = timeline.filter((itme) => itme.postId !== postId )
  //   setTimeline(_POST_DATA)
  // }

  return(
    <div>
      <h1>게시글들을 담는 타임라인페이지입니다.</h1>
      {/* post_data를 oneTimeline에 담아 뿌려준다. 순회를 통해 각 객체를 전달한다. */}
      <div>
        {timeline.map((post) => (
          <OneTimeline post ={post} postId={post.postId} timeline={timeline} setTimeline={setTimeline} /> // 고유한 식별자를 전달하여 구별을 가능케 한다. 
        ))}
      </div>
    </div>
  )
}

export default TimelineList