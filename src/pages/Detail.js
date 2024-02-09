import React, { useEffect, useState } from "react";
import { useParams, useContext } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

styled.button(YellowBtn);

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  let [count, setCount] = useState(0);
  let [showAlert, setShowAlert] = useState(true);
  let [isNum, setisNum] = useState("");
  let [tab, settab] = useState(0);

  useEffect(() => {
    if (isNaN(isNum) == true) {
      alert("숫자만 입력해주세요.");
    }
  }, [isNum]);

  useEffect(() => {
    let a = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let { id } = useParams();

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <input
        onChange={(e) => {
          setisNum(e.target.value);
        }}
      ></input>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              settab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              settab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              settab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
        ''
      </Nav>

      <TabContent tab={tab} />
    </div>
  );
}
function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
