import React, { Component } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

import "./CouponModel.css";
import redirectAnim from "../../../../images/redirectAnim.gif";

class CouponModel extends Component {
  state = {
    modalOpen: false,
    redirect: this.props.redirect,
    timer : 4000,
    countDown : 4
  };

  showModel() {
    this.setState({ modalOpen: true });
  }

  hideModel() {
    this.setState({ modalOpen: false });
    clearTimeout(this.state.timerId);
  }

  setRedirect(option) {
    this.setState({ redirect: option });
  }

  // 4 seconds after model is loaded we open external coupon site link and close the model.
  redirectTimer() {
    // Countdown Timer - Just Count Down for Asthetic Purposes
    let countDown = setInterval(()=>{
      if (this.state.countDown >= 0){
        this.setState({countDown : this.state.countDown - 1});
      } else {
        clearInterval(countDown);
      }
    }, 1000);

    // Redirect Timer - Witch redierct user to extenal store site.
    if (this.state.redirect) {
      let timerId = setTimeout(() => {
        window.open(this.props.coupon.linkUrl, "_newtab");
        this.hideModel();
      }, this.state.timer);

      // Saving timer id so we can disable timer when button is clicked.
      this.setState({ timerId });
    }
  }

  redirectClick() {
    clearTimeout(this.state.timerId);
    window.open(this.props.coupon.linkUrl, "_newtab");
    this.hideModel();
  }

  componentDidMount() {
    this.props.getModalOpenFn &&
      this.props.getModalOpenFn({
        showModel: this.showModel.bind(this),
        hideModel: this.hideModel.bind(this),
        setRedirect: this.setRedirect.bind(this),
        redirectTimer: this.redirectTimer.bind(this)
      });
  }

  render() {
    const { coupon } = this.props;
    return (
      <Modal
        closeIcon
        open={this.state.modalOpen}
        onOpen={() => {
          this.redirectTimer.bind(this)();
        }}
        onClose={this.hideModel.bind(this)}
        size="small"
        // Intial render output of model. When user click on this model open.
        trigger={
          <div
            className="coupon-modal"
            onClick={() => {
              this.setState({ redirect: this.props.redirect, countDown: 4 });
              this.showModel.bind(this)();
            }}
          >
            {this.props.trigger}
          </div>
        }
      >
        <Modal.Header>{coupon.storeId.name + " Coupon/Deal"}</Modal.Header>
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

              {this.state.redirect && (
                <div>
                  <h4>
                    Automatically Redirected In {this.state.countDown} Seconds{" "}
                    <img width="25" height="25" alt="" src={redirectAnim} />
                  </h4>
                </div>
              )}
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CouponModel;
