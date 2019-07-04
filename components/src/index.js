import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="3:00am"
          image={faker.image.avatar()}
          txt="Awesome!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="5:00pm"
          image={faker.image.avatar()}
          txt="Wow"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="jane"
          timeAgo="4:20am"
          image={faker.image.avatar()}
          txt="Amazing"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
