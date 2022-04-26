import React from "react";
import "./largeWidget.css";

const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButton " + type}>{type}</button>;
  };

  return (
    <div className="largeWidget">
      <h3 className="largeWidgetTitle">Latest transactions</h3>
      <table className="largeWidgetTable">
        <tbody>
          <tr className="largeWidgetTr">
            <th className="largeWidgetTh">Customer</th>
            <th className="largeWidgetTh">Date</th>
            <th className="largeWidgetTh">Amount</th>
            <th className="largeWidgetTh">Status</th>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetCustomer">
              <img
                className="largeWidgetImg"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="largeWidgetName">Susan Carol</span>
            </td>
            <td className="largeWidgetDate">18 April 2022</td>
            <td className="largeWidgetAmount">₹22,222</td>
            <td className="largeWidgetStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetCustomer">
              <img
                className="largeWidgetImg"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="largeWidgetName">Susan Carol</span>
            </td>
            <td className="largeWidgetDate">18 April 2022</td>
            <td className="largeWidgetAmount">₹22,222</td>
            <td className="largeWidgetStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetCustomer">
              <img
                className="largeWidgetImg"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="largeWidgetName">Susan Carol</span>
            </td>
            <td className="largeWidgetDate">18 April 2022</td>
            <td className="largeWidgetAmount">₹22,222</td>
            <td className="largeWidgetStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="largeWidgetTr">
            <td className="largeWidgetCustomer">
              <img
                className="largeWidgetImg"
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <span className="largeWidgetName">Susan Carol</span>
            </td>
            <td className="largeWidgetDate">18 April 2022</td>
            <td className="largeWidgetAmount">₹22,222</td>
            <td className="largeWidgetStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LargeWidget;
