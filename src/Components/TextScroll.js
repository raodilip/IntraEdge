//import React, { Component } from 'react'
//import { Button, Modal } from 'react-bootstrap';
import "../index.css";
import * as _ from "underscore";
import React, { Component } from "react";

export default class TextScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: "30px",
      prev: 0,
      tick: false,
      lastScrollPosition: 0,
    };
  }

  onScroll = (e) => {
    let view = document.getElementById("text");

    console.log("scrollTop", view.scrollTop);
    let currFont = Number(
      this.state.fontSize.substring(0, this.state.fontSize.indexOf("p", 0))
    );
    if (this.state.prev > view.scrollTop) {
      //alert("up");
      currFont += 6;
      currFont.toString();
      currFont += "px";
      this.setState((prevState) => ({
        fontSize: currFont,
        prev: view.scrollTop,
      }));
    } else if (this.state.prev < view.scrollTop) {
      //alert("down");
      currFont -= 3;
      currFont.toString();
      currFont += "px";
      this.setState((prevState) => ({
        fontSize: currFont,
        prev: view.scrollTop,
      }));
    }
    console.log(currFont);
  };

  componentDidMount() {
    let view = document.getElementById("text");

    view.addEventListener(
      "scroll",
      // _.throttle(this.onScroll, 1000, { leading: true, trailing: true })
      _.throttle(this.onScroll, 500)
    );
  }

  render() {
    return (
      <div
        id="text"
        style={{ fontSize: this.state.fontSize }}
        className="textheight"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim
          praesent elementum facilisis leo vel fringilla. Lobortis feugiat
          vivamus at augue eget arcu. Proin fermentum leo vel orci porta non
          pulvinar neque. Arcu non odio euismod lacinia at quis risus. Varius
          quam quisque id diam vel. Nunc pulvinar sapien et ligula ullamcorper
          malesuada proin libero. Urna nunc id cursus metus aliquam eleifend.
          Feugiat in fermentum posuere urna nec tincidunt praesent. Quis ipsum
          suspendisse ultrices gravida dictum. Risus commodo viverra maecenas
          accumsan lacus vel. Urna porttitor rhoncus dolor purus. Nibh ipsum
          consequat nisl vel pretium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          fringilla est ullamcorper eget nulla facilisi etiam. Interdum
          consectetur libero id faucibus nisl tincidunt eget nullam non. Cras
          ornare arcu dui vivamus. Praesent elementum facilisis leo vel
          fringilla est. Nulla facilisi cras fermentum odio eu feugiat pretium
          nibh. Sit amet facilisis magna etiam tempor orci eu. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Fringilla phasellus faucibus scelerisque eleifend. Quam quisque id
          diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et
          pharetra pharetra massa massa. Pharetra massa massa ultricies mi. Amet
          tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque
          penatibus et magnis dis. In ornare quam viverra orci sagittis.
          Imperdiet massa tincidunt nunc pulvinar sapien et. Metus aliquam
          eleifend mi in.
        </p> */}
      </div>
    );
  }
}
