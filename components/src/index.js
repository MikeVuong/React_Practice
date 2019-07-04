import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";

const App = () => {
  return (
    <div className="ui container comments">
      <Message
        header="Changes in Service"
        text="We just updated our privacy policy here to better service our customers."
      />
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
      <Segment
        textOne="No documents are listed for this customer."
        addButton="Add Document"
        textTwo="Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
      ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. Aenean ultricies mi vitae est. Mauris placerat
      eleifend leo."
        infoTag="For Your Information"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
