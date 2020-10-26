import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../utils/API";

let itemsArr = [
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
];

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

function Feed() {
  const [items, setItems] = useState(itemsArr);
  const [page, setPage] = useState(1);

  function fetchMoreData() {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    API.getPosts(setPage(page + 1));

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  }

  return (
    <React.Fragment>
      <h1>practice with infinite scroll</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{i}
          </div>
        ))}
      </InfiniteScroll>
    </React.Fragment>
  );
}

export default Feed;
