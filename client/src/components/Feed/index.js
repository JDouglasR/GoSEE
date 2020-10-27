import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import API from "../../utils/API";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

function Feed(props) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  //   const [page, setPage] = useState(1);

  function fetchMoreData() {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // API.getPosts(setPage(page + 1));

    API.getPosts()
      .then((res) => {
        console.log(res);
        setItems(items.concat(res.data));
      })
      .catch((err) => console.error(err));

    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // setTimeout(() => {
    //   setItems(items.concat(Array.from({ length: 20 })));
    // }, 1500);
  }

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <React.Fragment>
      <h1>Here are the posts!</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
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
            <div className="row">
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">{i.hashtag}</h5>
                  <p className="card-text">{i.post}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </React.Fragment>
  );
}

export default Feed;
