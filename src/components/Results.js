import './Results.css'
import Item from './Item';



function Results(props) {
  const {data} = props;
  return (
    <>
      <ul>{data.map((element) => {
        return <Item {...element} key={element.id}></Item>
      })}
      </ul>
    </>
  );
}

export default Results;
