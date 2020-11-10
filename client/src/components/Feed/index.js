import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

function Feed(props) {
  return (
    <React.Fragment>
      {/* <Grid
        className="feed"
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      > */}
      <InfiniteScroll
        item
        sm={6}
        dataLength={props.items.length}
        next={props.showAllPosts}
        // hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={props.showAllPosts}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        {props.items
          .map((i, index) => {
            if (i.posts) {
              const date = new Date(i.posts.day);
              const month = new Array();
              month[0] = "January";
              month[1] = "February";
              month[2] = "March";
              month[3] = "April";
              month[4] = "May";
              month[5] = "June";
              month[6] = "July";
              month[7] = "August";
              month[8] = "September";
              month[9] = "October";
              month[10] = "November";
              month[11] = "December";

              const hours = new Date(i.posts.day).getHours();
              const ampm = hours >= 12 ? " pm" : " am";

              return (
                <div className="feed-posts" key={index}>
                  <p className="postName">
                    {i.firstName} {i.lastName}
                  </p>
                  {i.posts.post}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className="hashtag">#{i.posts.hashtag}</span>
                    <span className="time">
                      {month[date.getMonth()] +
                        " " +
                        date.getDate() +
                        ", " +
                        date.getFullYear() +
                        " | " +
                        ((date.getHours() + 24) % 12 || 12) +
                        ":" +
                        date.getMinutes() +
                        ampm}
                    </span>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })
          .reverse()}
      </InfiniteScroll>
      {/* </Grid> */}
    </React.Fragment>
  );
}

export default Feed;
