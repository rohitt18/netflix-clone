import React, { useEffect, useState } from "react";
import "./smallWidget.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

const SmallWidget = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`/api/v1/users?new=true`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjI1MjE0MWNjOTRlOWQzNmZlOGIxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDczOTMxMywiZXhwIjoxNjUxMTcxMzEzfQ.6H3wnC3pDyWHYEZnYt1A2ySt9NK3DAXhWniD2WeXM5I",
          },
        });
        // console.log(res);
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">New Joined Members</span>
      <ul className="smallWidgetList">
        {newUsers.map((user) => (
          <li className="smallWidgetListItem">
            <img
              className="smallWidgetImg"
              src={
                user.profilePic ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX/rQH/////rAD///7/rQP//f//qgD///z8///9rwD///v8sAD///n6////qwX9/f////P//+7///bxqgD//+j4qQDtqwDypQDupwD//+T2///1rgD67cf/+tj/+eD3//jtqRXt0IbnrRXovErw2ZP67cH15K7msCvpyXT/+Nzz25vlw2Hz1Inpx2z1owDrqRvesRj59MTo1X7hzGX6+tDjs0Dot1DqsDfmyF7quTr16qn316H38cnr0XT346nvx2D99rzgu0fxx3PuvWHz35H04LPjtSnvuU399Ozvph/rrS/yz4/037nwzn36sS/kqTzSoEDdoRX4uynCjiXAjDHTn1PZrEHDjC3TpEvTnh7Skx6zgi7NlEG6hyXgpznOmizgkhWVHP/dAAAKVUlEQVR4nO2dDVvTyBbHk0ySmUkmkzRtQtv0BcNLoVi5eIEKAlUXRbrbq6Kru66rfP9Pcc8EWBW6SjexhX3O73kQVBzOf2bOmTPJnFHTEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBvo1pcq5phpQztkMahvpknH0qFBBnKgpveDI4dLQyw+VFN6ya1YzZKzRNCV1tKKHFtiuhSdfls5+lMDtdVzMNaRfdshmVq2lcjszi5/+kdsRptRxpRdrBXSnjhcWlZqnVWL7TiTmMIwgt2hG+hfpxrmvyZH5ludFabTa6C7EJZvFCvMaUdnltqUJ1y9F1GjQXO5FtqClbQNsTWGFCoCvfbQXC8wQYEjR697LoUEDbNl/vlur1uhMI3feZp7cGidTAJwto+9q4CXT0dpNZlucx3fLa7TBYSrVixtD+z4bl65ZPqK4TIUTgl+6XpVm8q38Dmbg8/m9gBYI6jmVRSomls80toxCF6RILdUYI0aHziK4L4gf7EU8KaPr6uFyulULPp5TpVNBMZNvfeyZzKgR3M8vLJaKapSDxAlLZtt1prox2rPU3KXRx9tNhMil7GBEbVZsbuQwxDXehEhJG9a+g3lLZnebKaPO5A6FfhopgzYTVP0fD3LDjpaytr5sWLHyQTNMPXbkV+FcUEuptxjKfQil3Ak+1dbnzvN2yNsVpyuWiR8gViToLBzLfqiWTEVOBy7vU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"
              }
              alt=""
            />
            <div className="smallWidgetUser">
              <span className="smallWidgetUsername">{user.username}</span>
            </div>
            <button className="smallWidgetButton">
              <Visibility className="smallWidgetIcon" /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallWidget;
