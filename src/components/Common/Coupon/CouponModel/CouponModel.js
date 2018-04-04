import React, { Component } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

import "./CouponModel.css";
import redirectAnim from "../../../../images/redirectAnim.gif";

class CouponModel extends Component {
  state = {
    modalOpen: false
  };

  showModel() {
    this.setState({ modalOpen: true });
  }

  hideModel() {
    this.setState({ modalOpen: false });
    clearTimeout(this.state.timerId);
  }

  // 4 seconds after model is loaded we open external coupon site link and close the model.
  redirectTimer() {
    let timerId = setTimeout(() => {
      window.open(this.props.coupon.linkUrl, "_newtab");
      this.hideModel();
    }, 4000);

    // Saving timer id so we can disable timer when button is clicked.
    this.setState({ timerId });
  }

  redirectClick() {
    clearTimeout(this.state.timerId);
    window.open(this.props.coupon.linkUrl, "_newtab");
    this.hideModel();
  }

  render() {
    const { coupon } = this.props;

    return (
      <Modal
        open={this.state.modalOpen}
        onOpen={() => {
          console.log("opened");
          this.redirectTimer();
        }}
        onClose={this.hideModel.bind(this)}
        closeIcon={"X"}
        size="small"
        trigger={
          <div onClick={this.showModel.bind(this)} className="showButton">
            {coupon.kind === "deal" ? "Get Deal" : "Show Code"}
          </div>
        }
      >
        <Modal.Header>{coupon.storeId.name + " Coupon/Deal" }</Modal.Header>
        <Modal.Content>
          <Image size="small" circular centered src={coupon.storeId.logoUrl} />
          <Modal.Description>
            {"  "}
            <Header>{coupon.title}</Header>
            <p className="modal-title">Description : </p>
            <p>{coupon.description}</p>

            {coupon.exclutionDetails ? (
              <div>
                <p className="modal-title">Exclution Details : </p>
                <p>{coupon.exclutionDetails}</p>
              </div>
            ) : (
              ""
            )}

            <p className="modal-title">Expiration Date : </p>
            <p>{new Date(coupon.expiredAt).toDateString()}</p>

            <div className="modal-button">
              <div>
              {/* This box only shown when coupon type is not deal */}
              {coupon.kind !== "deal" ? (
                <Button size="massive" basic color="olive">
                  {coupon.code}
                </Button>
              ) : (
                ""
              )}
              </div>

              <div>
              <Button
                size="small"
                color="blue"
                icon
                labelPosition="left"
                onClick={this.redirectClick.bind(this)}
              >
                <Icon name="world" />
                {"Go To " + coupon.storeId.name + " Store Web Site"}
              </Button>
              </div>

              <div>
              <h4>Automatically Redirected In 4 Seconds <img width="25" height="25" alt="" src={redirectAnim}/></h4>
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CouponModel;
