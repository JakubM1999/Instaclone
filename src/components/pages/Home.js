import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../../App";


const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://instaclonevefskoli.herokuapp.com/allpost`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch(`https://instaclonevefskoli.herokuapp.com/like`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unlikePost = (id) => {
    fetch(`https://instaclonevefskoli.herokuapp.com/unlike`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      });
  };

  const deletePost = (postid) => {
    fetch(`https://instaclonevefskoli.herokuapp.com/deletepost/${postid}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h4 style={{fontWeight:"bold",marginLeft:"20px"}}>
              {item.postedBy.name}
              {item.postedBy._id == state._id && (
                <i
                  className="material-icons"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )}{" "}
            </h4>
            <div className="card-image">
              <img style={{overFlow:"hidden",maxWidth:"665px", margin:"0 auto"}} alt="" src={item.photo} />
            </div>
            <div className="card-content">
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  style={{ color: "#fbc02d", cursor: "pointer" }}
                  onClick={() => {
                    unlikePost(item._id);
                  }}
                >
                  star
                </i>
              ) : (
                <i
                  className="material-icons"
                  style={{ color: "#fbc02d", cursor: "pointer" }}
                  onClick={() => {
                    likePost(item._id);
                  }}
                >
                  star_border
                </i>
              )}
              <h6>{item.likes.length} likes</h6>
              <h6>
                <b>{item.title}</b>
              </h6>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;