import React from "react";
import Notification from "./Notification";

const reservedNotifiacations = [
  {
    id: 1,
    message : "안녕하세요, 오늘 일정 공유드립니다.",
  },
  {
    id: 2,
    message : "안녕하세요, 점심 식사 시간입니다.",
  },
  {
    id: 3,
    message : "안녕하세요, 곧 미팅이 시작될 예정입니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if(notifications.length < reservedNotifiacations.length) {
        const index = notifications.length;
        notifications.push(reservedNotifiacations[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notifications) => {
          return <Notification 
          key={notifications.id}
          id={notifications.id}
          message = {notifications.message}/>;
        })}
      </div>
    );
  }
}

export default NotificationList;