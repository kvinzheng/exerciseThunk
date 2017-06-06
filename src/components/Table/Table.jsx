import React from 'react';

//see: https://github.com/reactjs/react-redux/blob/master/docs/api.md
import { connect } from 'react-redux'
import './Table.css';

const TableWithTitleFixed =  WrappedComponent => {
  return class extends React.Component {
    render() {
      const newList = this.props.list.map((item) => {
        return {...item, title: item.title === '' ? 'N/A' : item.title}
      });

      return (
        <WrappedComponent {...this.props} list={newList} />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.news.results
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

export default connect(mapStateToProps)(TableWithTitleFixed(Table))
