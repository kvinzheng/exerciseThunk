import React from 'react';

//see: https://github.com/reactjs/react-redux/blob/master/docs/api.md
import { connect } from 'react-redux'
import './Table.css';

const mapStateToProps = (state) => {
  // console.log('what is state',state);
  const query = state.query;
  const list = (state.news[query] ? state.news[query].results: null ) || [];
  return {
    list
  }
}

const _renderList = list => (
  list
    .map(item => (
      <tr key={item.objectID}>
        <td>
          <a href={item.url}>{item.title}</a>
        </td>
        <td>
          {item.author}
        </td>
        <td>
          {item.num_comments}
        </td>
        <td>
          {item.points}
        </td>
      </tr>
    ))
);

const Table = ({ list }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Author
          </th>
          <th>
            Comments
          </th>
          <th>
            Points
          </th>
        </tr>
      </thead>
      <tbody>
        {_renderList(list)}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(Table)
