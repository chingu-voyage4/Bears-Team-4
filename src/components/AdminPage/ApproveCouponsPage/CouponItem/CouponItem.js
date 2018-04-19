import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

class CouponItem extends Component {
  render() {
    const { mainState, coupon } = this.props;
    return (
      <Table.Row className="ApproveCouponsPage__table__row">
        <Table.Cell>{coupon.kind === "deal" ? "Deal" : "Coupon"}</Table.Cell>
        <Table.Cell>{coupon.storeId.name}</Table.Cell>
        <Table.Cell className="ApproveCouponsPage__table__titleCell">{coupon.title}</Table.Cell>
        <Table.Cell>{new Date(coupon.expiredAt).toLocaleDateString()}</Table.Cell>
        <Table.Cell>
        <Button.Group>
          <Button icon color="green">
            <Icon name='check circle outline'  />
          </Button>
          <Button icon color="red">
            <Icon name='trash outline'  />
          </Button>
          <Button icon color="blue">
            <Icon name='edit' onClick={() => {
              mainState.setState({ activePage: "editForm", activeCoupon:coupon });
            }}/>
          </Button>
        </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  }
}


export default CouponItem;

