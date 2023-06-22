import styles from './FirstTopNav.module.scss';


const FirstTopNav = () => {

  return (
    <nav aria-label="first top nav bar">
      <div className="container">
        <div className={styles["upper-topnav"]}>
          <div className={styles["links"]}>
            <span className={styles["link"]}>
              <a href="">Chợ tốt</a>
              <span></span>
            </span>
            <span className={styles["link"]}>
              <a href="">Nhà tốt</a>
              <span></span>
            </span>
            <span className={styles["link"]}>
              <a href="">Chợ tốt xe</a>
              <span></span>
            </span>
            <span className={styles["link"]}>
              <a href="">Việc làm tốt</a>
              <span></span>
            </span>
          </div>

          <div className={styles["toolbar"]}>
            <div className={styles["action"]}>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.40348 2.39128V16.7194L4.64037 14.5516C4.78028 14.416 4.96748 14.3402 5.16231 14.3402H17.7011V2.39128H2.40348ZM1.23682 1.97461C1.23682 1.5604 1.5726 1.22461 1.98682 1.22461H18.1178C18.532 1.22461 18.8678 1.56039 18.8678 1.97461V14.7569C18.8678 15.1711 18.532 15.5069 18.1178 15.5069H5.33108L2.50876 18.242C2.033 18.703 1.23682 18.3659 1.23682 17.7034V1.97461Z"
                    fill="#222222"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1959 4.14561C10.4876 3.85375 10.9603 3.85233 11.2537 4.14242L13.0985 5.9662C13.3948 6.25909 13.3956 6.73732 13.1003 7.03118L8.06457 12.0423C7.92403 12.1822 7.73382 12.2607 7.53554 12.2607H5.62223C5.25404 12.2607 4.95557 11.9622 4.95557 11.594V9.69962C4.95557 9.50078 5.03452 9.31008 5.17508 9.16944L10.1959 4.14561ZM10.7282 5.26344L6.12223 9.87213V11.094H7.36355L11.9796 6.50053L10.7282 5.26344Z"
                    fill="#222222"
                  ></path>
                  <path
                    d="M14.2439 12.1775H9.66895L11.3316 10.5332H14.2439C14.698 10.5332 15.0661 10.9013 15.0661 11.3554C15.0661 11.8094 14.698 12.1775 14.2439 12.1775Z"
                    fill="#222222"
                  ></path>
                </svg>
                <span>Đóng góp ý kiến</span>
              </a>
            </div>
            <div className={styles["action"]}>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 5.875H14.6875C15.1019 5.875 15.4993 6.03962 15.7924 6.33265C16.0854 6.62567 16.25 7.0231 16.25 7.4375V15.5625C16.25 15.9769 16.0854 16.3743 15.7924 16.6674C15.4993 16.9604 15.1019 17.125 14.6875 17.125H5.3125C4.8981 17.125 4.50067 16.9604 4.20765 16.6674C3.91462 16.3743 3.75 15.9769 3.75 15.5625V7.4375C3.75 7.0231 3.91462 6.62567 4.20765 6.33265C4.50067 6.03962 4.8981 5.875 5.3125 5.875H6.875"
                    stroke="#222222"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.875 9.625L10 12.75L13.125 9.625M10 1.5V12.125"
                    stroke="#222222"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Tải ứng dụng</span>
              </a>
            </div>
            <div className={styles["action"]}>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3.125C8.64026 3.125 7.31104 3.52821 6.18046 4.28365C5.04987 5.03908 4.16868 6.11281 3.64833 7.36905C3.12798 8.62529 2.99183 10.0076 3.2571 11.3412C3.52238 12.6749 4.17716 13.8999 5.13864 14.8614C6.10013 15.8228 7.32514 16.4776 8.65876 16.7429C9.99238 17.0082 11.3747 16.872 12.631 16.3517C13.8872 15.8313 14.9609 14.9501 15.7164 13.8195C16.4718 12.689 16.875 11.3597 16.875 10C16.875 8.17664 16.1507 6.42795 14.8614 5.13864C13.572 3.84933 11.8234 3.125 10 3.125Z"
                    stroke="#222222"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M7.8125 7.90225C7.8125 7.90225 7.84531 7.21866 8.57695 6.62998C9.01094 6.28037 9.53125 6.1792 10 6.17217C10.427 6.1667 10.8082 6.23741 11.0363 6.346C11.427 6.53194 12.1875 6.98584 12.1875 7.95108C12.1875 8.9667 11.5234 9.42803 10.7668 9.93545C10.0102 10.4429 9.80469 10.9937 9.80469 11.5628"
                    stroke="#222222"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M9.76562 14.375C10.1971 14.375 10.5469 14.0252 10.5469 13.5938C10.5469 13.1623 10.1971 12.8125 9.76562 12.8125C9.33415 12.8125 8.98438 13.1623 8.98438 13.5938C8.98438 14.0252 9.33415 14.375 9.76562 14.375Z"
                    fill="#222222"
                  ></path>
                </svg>
                <span>Trợ giúp</span>
              </a>
            </div>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default FirstTopNav;

