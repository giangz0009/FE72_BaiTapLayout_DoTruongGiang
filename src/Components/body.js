import React from "react";
import Banner from "./banner";
import Card from "./card";

const body = () => {
  return (
    <div id="body">
      <Banner />
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Card
            icon="fa-solid fa-ethernet"
            title="Fresh new layout"
            content="With Bootstrap 5, we've created a fresh new layout for this template!"
          ></Card>
          <Card
            icon="fa-solid fa-cloud-arrow-down"
            title="Free to download"
            content="As always, Start Bootstrap has a powerful collectin of free templates."
          ></Card>
          <Card
            icon="fa-solid fa-address-card"
            title="Jumbotron hero header"
            content="The heroic part of this template is the jumbotron hero header!"
          ></Card>
          <Card
            icon="fa-brands fa-bootstrap"
            title="Feature boxes"
            content="We've created some custom feature boxes using Bootstrap icons!"
          ></Card>
          <Card
            icon="fa-solid fa-code"
            title="Simple clean code"
            content="We keep our dependencies up to date and squash bugs as they come!"
          ></Card>
          <Card
            icon="fa-solid fa-circle-check"
            title="A name you trust"
            content="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default body;
