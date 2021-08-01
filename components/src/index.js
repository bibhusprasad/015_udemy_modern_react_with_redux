//import the React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//live run
if (module.hot) {
  module.hot.accept();
}

//create a react component
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 6am'
          content='Nice Blog!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Yesterday at 4pm'
          content='Nice image'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Today at 10 am'
          content='all the best'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//Take the React component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
