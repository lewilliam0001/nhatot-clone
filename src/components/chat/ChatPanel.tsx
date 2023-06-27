import styles from "./ChatPanel.module.scss";
import { AiOutlineSend } from "react-icons/ai";

const HeaderCard = () => {
  return (
    <div className={styles["header-card"]}>
      <div className={styles["card-header"]}>
        <span className={styles["avatar"]}>
          <img
            src="https://cdn.chotot.com/73TO65Il6h0sDADPUC1slh5Y1vS2PLWhtNQHi_jRmOQ/preset:uac/plain/d01e19fd5a0155b562cce3020725c41a-7b935f90d149c81e3a81f07cce1a9040332e6d90.jpg"
            alt="userAvatar"
          />
        </span>
      </div>
      <div className={styles["card-body"]}>
        <div className={styles["user-name"]}>Lê Việt Anh</div>
        <div className={styles["last-active"]}>
          <span className={styles["status-icon"]}></span>
          <span className={styles["time"]}>1 giờ trước</span>
        </div>
      </div>
      <div className={styles["card-footer"]}>
        <span className={styles["more"]}>
          <img
            src="https://chat.chotot.com/icons/moreVertical.svg"
            alt="more"
          />
        </span>
      </div>
    </div>
  );
};

const MessageBox = () => {
  return (
    <div className={styles["message-box"]}>
      <div className={styles["messages"]}>
        <div style={{ height: "200px " }}></div>
      </div>
      <div className={styles["quick-messages"]}>
        <ul>
          <li>Căn hộ này còn không ạ?</li>
          <li>Thời hạn thuê tối đa là bao lâu?</li>
          <li>Thời gian thuê tối thiểu là bao lâu?</li>
          <li>Căn hộ có sẳn nội thất chưa ạ?</li>
          <li>Có thêm chi phí phát sinh gì nữa không?</li>
        </ul>
      </div>
      <ChatBox />
    </div>
  );
};

const ChatBox = () => {
  return (
    <div className={styles["chat-box"]}>
      <span className={styles["more-actions"]}>
        <img src="https://chat.chotot.com/icons/plusCircle.svg" alt="open" />
      </span>
      <textarea contentEditable={true} onKeyUp={(e) => { 
        const element = e.currentTarget;
        element.style.height = `35px`;
        element.style.height = `${element.scrollHeight}px`;
      }} placeholder="Nhập tin nhắn"></textarea>
      <span className={styles["send-icon"]}>
        <AiOutlineSend />
      </span>
    </div>
  );
};

const ChatPanel = () => {
  return (
    <div className={styles["chat-panel"]}>
      <HeaderCard />
      <MessageBox />
    </div>
  );
};

export default ChatPanel;
