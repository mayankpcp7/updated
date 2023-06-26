import React from "react";

const Statics = () => {
  return (
    <>
      <section className="bg_statics py-lg-5 bg_lg_color " id="Statistics">
        <h2 className="ff_exo text-white fw-bolder fs_xl text-center py-5 mb-0">
          Statistics
        </h2>
        <div className="container pb-lg-5 ">
          <div className="row pt-3 py-lg-5 py-3">
            <div className="col-lg-3 col-md-4 col-sm-6 py-3 py-lg-0">
              <div className="d-flex flex-column align-items-center justify-content-center border_card card_bg_color p-3 h-100 transform_y_animation">
                <div>
                  <svg
                    width="70"
                    height="73"
                    viewBox="0 0 70 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="red"
                      clip-rule="evenodd"
                      d="M35.0312 11.5308C37.7826 11.5308 40.0134 8.94936 40.0134 5.76533C40.0134 2.58145 37.7826 0 35.0312 0C32.2794 0 30.0489 2.58145 30.0489 5.76533C30.0489 8.94936 32.2794 11.5308 35.0312 11.5308ZM29.6994 12.8032C26.1711 12.8032 23.3336 16.1329 23.3336 20.286V37.9872C23.3336 41.4287 27.6861 41.4287 27.6861 37.9872V21.8014H28.7165V66.1207C28.7165 70.7219 34.5125 70.5865 34.5125 66.1207V40.3939H35.5108V66.1207C35.5108 70.5865 41.3386 70.7219 41.3386 66.1207V21.8014H42.3449V37.9872C42.3449 41.4345 46.6233 41.4549 46.6666 38.0489V40.9872C46.6666 44.4287 51.0192 44.4287 51.0192 40.9872V24.8014H52.0495V69.1207C52.0495 73.7219 57.8455 73.5865 57.8455 69.1207V43.3939H58.8438V69.1207C58.8438 73.5865 64.6716 73.7219 64.6716 69.1207V24.8014H65.6779V40.9872C65.6779 44.4552 70.0077 44.4551 69.9999 40.9872V23.3919C69.9999 19.5623 67.4298 15.8111 63.556 15.8111L53.0324 15.8032C49.5258 15.8032 46.7015 19.0921 46.6669 23.2096V20.3919C46.6669 16.5623 44.0968 12.8111 40.2229 12.8111L29.6994 12.8032ZM11.6977 14.5308C14.4491 14.5308 16.6799 11.9493 16.6799 8.7653C16.6799 5.58142 14.4491 2.99997 11.6977 2.99997C8.94594 2.99997 6.71542 5.58142 6.71542 8.7653C6.71542 11.9493 8.94594 14.5308 11.6977 14.5308ZM6.36586 15.8031C2.83762 15.8031 9.15527e-05 19.1329 9.15527e-05 23.286V40.9872C9.15527e-05 44.4286 4.35265 44.4286 4.35265 40.9872V24.8014H5.38304V69.1207C5.38304 73.7219 11.179 73.5865 11.179 69.1207V43.3939H12.1773V69.1207C12.1773 73.5865 18.0051 73.7219 18.0051 69.1207V24.8014H19.0114V40.9872C19.0114 44.4552 23.3412 44.455 23.3334 40.9872V23.3919C23.3334 19.5622 20.7633 15.8111 16.8894 15.8111L6.36586 15.8031ZM63.3465 8.76533C63.3465 11.9494 61.1156 14.5308 58.3642 14.5308C55.6124 14.5308 53.3819 11.9494 53.3819 8.76533C53.3819 5.58145 55.6124 3 58.3642 3C61.1156 3 63.3465 5.58145 63.3465 8.76533Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-center mb-0 pt-3 ff_montserrat fw-semibold fs_lg text-white color_change">
                    25000+
                  </h4>
                  <p className="text-center mb-0 pt-2 text-white fw-medium fs_sm ff_exo color_change op_ py-3 py-lg-070">
                    Active Members
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 py-3 py-lg-0 ">
              <div className="d-flex flex-column align-items-center justify-content-center border_card card_bg_color p-3 h-100 transform_y_n-animation  ">
                <div>
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 0.888916C23.7488 0.888916 15.8356 4.16668 10.0011 10.0011C4.16665 15.8356 0.888885 23.7488 0.888885 32C0.892234 32.5929 0.912532 33.1857 0.949755 33.7774L2.72715 32H4.6398L1.1229 35.5169C1.17709 36.0869 1.247 36.6552 1.33256 37.2213L6.55381 32H8.46647L1.67884 38.7877C1.78266 39.3109 1.89993 39.8314 2.03053 40.3486L10.3791 32H12.2918L2.50802 41.7824C2.65503 42.2655 2.81379 42.745 2.98415 43.2203L14.2071 32H16.1198L3.57256 44.5459C3.75887 44.991 3.95551 45.4316 4.16232 45.8675L18.0325 32H19.9451L4.84135 47.1011C5.06441 47.5112 5.29668 47.9162 5.53797 48.3158L21.8578 32H23.7704L6.2941 49.4736C6.5528 49.851 6.81979 50.2226 7.09488 50.5882L25.6831 32H27.5957L7.9227 51.6717C8.21374 52.0182 8.51229 52.3582 8.81816 52.6916L29.5084 32H31.4211L9.7285 53.6926C10.0476 54.0121 10.3737 54.3246 10.7065 54.63L33.3337 32H35.2464L11.6966 55.5525C12.0443 55.8438 12.3983 56.1275 12.7584 56.4033L37.1604 32H39.073L13.846 57.2298C14.2176 57.4983 14.5951 57.7585 14.9782 58.0103L40.9857 32H42.8984L16.1644 58.7366C16.5618 58.9801 16.9645 59.2146 17.3724 59.44L42.7874 34.0236L44.7001 32.1109L44.811 32H46.7237L45.6551 33.0686L18.6628 60.0636C19.0904 60.2787 19.5229 60.4839 19.96 60.6791L46.6141 34.0222L48.6363 32H50.549L47.5691 34.9799L21.3546 61.1931C21.8184 61.3752 22.2866 61.5461 22.7586 61.7057L48.5254 35.939L52.4643 32H54.377L49.4804 36.8966L24.2804 62.0966C24.7842 62.2402 25.2917 62.371 25.8021 62.4889L50.4381 37.8516L56.2897 32H58.2023L51.3944 38.8079L27.4632 62.7392C28.0223 62.8311 28.5839 62.9078 29.1472 62.9691L52.3534 39.7643L60.115 32H62.029L53.3111 40.7206L30.9706 63.0584C31.3134 63.0816 31.6566 63.0992 32 63.1111C32.2864 63.1056 32.5728 63.0962 32.8589 63.0827L54.2647 41.6769L63.0651 32.8738C63.0845 32.5828 63.0999 32.2915 63.1111 32C63.1111 23.7488 59.8333 15.8356 53.9989 10.0011C48.1644 4.16668 40.2512 0.888916 32 0.888916ZM9.7285 53.6926C9.6633 53.6302 9.59837 53.5675 9.53372 53.5046C9.59594 53.5708 9.65546 53.6398 9.71768 53.7034L9.7285 53.6926V53.6926ZM0.957871 33.9614C0.973705 34.1748 0.991741 34.3881 1.01198 34.6012C0.994392 34.3875 0.971397 34.1765 0.957871 33.9614ZM62.9664 34.892L55.2224 42.6346L34.9055 62.9515C35.6334 62.8892 36.3589 62.8012 37.0806 62.6878L54.2647 45.5022L56.1774 43.5896L62.6499 37.1144C62.7816 36.3772 62.8868 35.6355 62.965 34.8907L62.9664 34.892ZM62.5606 37.7082C62.5011 38.0329 62.4334 38.3562 62.3631 38.6781C62.4345 38.3559 62.5008 38.0326 62.5619 37.7082H62.5606ZM62.144 39.5384L57.1351 44.5473L55.2224 46.4599L39.5248 62.1589C40.4491 61.9259 41.3622 61.6506 42.2612 61.3337L56.1787 47.4163L58.0914 45.5036L61.331 42.2653C61.6434 41.3692 61.9147 40.4593 62.144 39.5384V39.5384ZM2.98956 43.2311C3.00884 43.2781 3.02822 43.325 3.04773 43.3718C3.02879 43.3245 3.00715 43.2798 2.98956 43.2325V43.2311ZM59.9635 45.5442L59.0477 46.4599L57.1351 48.3739L45.5103 59.9973C47.1992 59.1778 48.8105 58.2072 50.3244 57.0972L57.1161 50.3042C58.2056 48.8051 59.159 47.2116 59.9648 45.5428L59.9635 45.5442ZM4.23671 46.0325C4.27519 46.1066 4.31397 46.1805 4.35304 46.2543L4.23671 46.0325ZM5.73816 48.6702C5.79987 48.7652 5.86209 48.8599 5.92483 48.9542L5.73951 48.6702H5.73816ZM7.57236 51.2578C7.6092 51.3057 7.64617 51.3535 7.68328 51.4012L7.57236 51.2578ZM56.2288 51.4729C56.0529 51.6893 55.892 51.9193 55.7107 52.133C55.8864 51.9153 56.0591 51.6952 56.2288 51.4729ZM53.8725 54.1092C53.6019 54.377 53.3125 54.6246 53.0325 54.8829C53.3167 54.6302 53.5963 54.3722 53.8711 54.1092H53.8725ZM51.7217 56.0354C51.4214 56.2816 51.113 56.5183 50.8019 56.7523C51.113 56.5191 51.4196 56.2801 51.7217 56.0354V56.0354ZM43.3975 60.9428C43.2893 60.9861 43.1811 61.024 43.0728 61.0646C43.1813 61.0246 43.2895 60.984 43.3975 60.9428V60.9428ZM37.8732 62.5281C37.6298 62.5755 37.3903 62.6377 37.1428 62.6796C37.3869 62.6321 37.6304 62.5816 37.8732 62.5281V62.5281ZM34.5389 62.9935C34.1047 63.0286 33.6678 63.0543 33.2282 63.0706C33.6656 63.0541 34.1026 63.0284 34.5389 62.9935V62.9935Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2_6034"
                        x1="0.888885"
                        y1="37.6566"
                        x2="63.1111"
                        y2="37.6566"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#6601CD" />
                        <stop offset="1" stop-color="#CB2AEF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 className="text-center mb-0 pt-3 ff_montserrat fw-semibold fs_lg text-white color_change">
                    765%
                  </h4>
                  <p className="text-center mb-0 pt-2 text-white fw-medium fs_sm ff_exo color_change op_ py-3 py-lg-070">
                    Average Percentage
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 py-3 py-lg-0">
              <div className="d-flex flex-column align-items-center justify-content-center border_card card_bg_color p-3 h-100 transform_y_animation ">
                <div>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.12501 1.625C8.12501 1.19402 8.29622 0.780698 8.60096 0.475951C8.90571 0.171205 9.31904 0 9.75001 0L42.25 0C42.681 0 43.0943 0.171205 43.3991 0.475951C43.7038 0.780698 43.875 1.19402 43.875 1.625C43.875 3.3735 43.836 5.0375 43.7645 6.617C45.0487 6.82965 46.2773 7.29729 47.3779 7.99234C48.4784 8.68738 49.4287 9.59577 50.1726 10.6639C50.9165 11.7321 51.439 12.9384 51.7092 14.2117C51.9795 15.485 51.992 16.7995 51.7462 18.0778C51.5003 19.356 51.0009 20.5721 50.2776 21.6542C49.5542 22.7364 48.6215 23.6628 47.5344 24.3787C46.4473 25.0947 45.2279 25.5857 43.948 25.8228C42.6681 26.06 41.3537 26.0384 40.0823 25.7595C37.5148 31.8208 33.9788 34.7848 30.875 35.5452V42.6075L35.5063 43.7645C36.1368 43.9205 36.7315 44.2033 37.2515 44.5933L43.225 49.075C43.4979 49.2796 43.6994 49.5649 43.8011 49.8905C43.9028 50.216 43.8995 50.5653 43.7916 50.8889C43.6838 51.2124 43.4768 51.4939 43.2002 51.6933C42.9235 51.8927 42.5911 52 42.25 52H9.75001C9.40895 52 9.07654 51.8927 8.79986 51.6933C8.52318 51.4939 8.31625 51.2124 8.2084 50.8889C8.10055 50.5653 8.09724 50.216 8.19893 49.8905C8.30062 49.5649 8.50217 49.2796 8.77501 49.075L14.7485 44.5933C15.2685 44.2033 15.8633 43.9205 16.4938 43.7645L21.125 42.6075V35.5452C18.0213 34.7848 14.4853 31.8208 11.9178 25.7563C10.6457 26.0367 9.33027 26.0594 8.04926 25.823C6.76825 25.5866 5.54759 25.0959 4.45938 24.3799C3.37117 23.6639 2.43747 22.7371 1.71343 21.6542C0.989392 20.5713 0.489688 19.3543 0.243832 18.0751C-0.00202365 16.7959 0.0109543 15.4803 0.282 14.2062C0.553045 12.9321 1.07666 11.7252 1.82192 10.6568C2.56719 9.58837 3.51899 8.68016 4.62111 7.98575C5.72323 7.29134 6.95333 6.82482 8.23876 6.61375C8.16225 4.95194 8.12432 3.28857 8.12501 1.625ZM8.44676 9.88C6.75087 10.1903 5.2477 11.1616 4.26794 12.5802C3.28818 13.9988 2.91208 15.7485 3.22239 17.4444C3.53269 19.1403 4.50398 20.6434 5.92257 21.6232C7.34117 22.603 9.09087 22.9791 10.7868 22.6687C9.70451 19.2563 8.87576 15.0442 8.44676 9.88ZM41.2165 22.6687C42.9124 22.9791 44.6621 22.603 46.0807 21.6232C47.4993 20.6434 48.4706 19.1403 48.7809 17.4444C49.0912 15.7485 48.7151 13.9988 47.7353 12.5802C46.7556 11.1616 45.2524 10.1903 43.5565 9.88C43.1243 15.0475 42.2955 19.2563 41.2165 22.6687ZM11.388 3.25C11.4108 4.93025 11.4725 6.5195 11.57 8.02425C11.9925 14.6153 13.0553 19.5487 14.3975 23.192C17.2055 30.81 21.073 32.5 22.75 32.5C23.181 32.5 23.5943 32.6712 23.8991 32.976C24.2038 33.2807 24.375 33.694 24.375 34.125V42.6075C24.375 43.332 24.1329 44.0358 23.6871 44.6069C23.2414 45.1781 22.6176 45.5839 21.9148 45.76L17.2803 46.917C17.0699 46.9693 16.8721 47.0633 16.6985 47.1932L14.625 48.75H37.375L35.3015 47.1932C35.127 47.063 34.928 46.969 34.7165 46.917L30.0853 45.76C29.3825 45.5839 28.7586 45.1781 28.3129 44.6069C27.8671 44.0358 27.625 43.332 27.625 42.6075V34.125C27.625 33.694 27.7962 33.2807 28.101 32.976C28.4057 32.6712 28.819 32.5 29.25 32.5C30.927 32.5 34.7945 30.81 37.6025 23.192C38.9448 19.552 40.0075 14.612 40.43 8.02425C40.5275 6.5195 40.5893 4.93025 40.612 3.25H11.388Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-center mb-0 pt-3 ff_montserrat fw-semibold fs_lg text-white color_change">
                    1508%
                  </h4>
                  <p className="text-center mb-0 pt-2 text-white fw-medium fs_sm ff_exo color_change op_ py-3 py-lg-070">
                    Our Record
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 py-3 py-lg-0">
              <div className="d-flex flex-column align-items-center justify-content-center border_card card_bg_color p-3 h-100 transform_y_n-animation">
                <div>
                  <svg
                    width="71"
                    height="70"
                    viewBox="0 0 71 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.9375 33.5417H52.5625C53.2917 32.5208 53.5833 31.2083 53.5833 29.8958V6.5625C53.7292 2.91667 50.8125 0 47.1667 0H23.8333C20.1875 0 17.2708 2.91667 17.2708 6.5625V30.0417C17.2708 31.3542 17.7083 32.6667 18.2917 33.6875H7.0625C3.41667 33.5417 0.5 36.4583 0.5 40.1042V63.5833C0.5 67.0833 3.41667 70 7.0625 70H30.5417C32.5833 70 34.3333 68.9792 35.6458 67.5208C36.8125 68.9792 38.7083 70 40.75 70H64.2292C67.875 70 70.7917 67.0833 70.7917 63.4375V40.1042C70.5 36.4583 67.5833 33.5417 63.9375 33.5417ZM20.1875 29.8958V6.5625C20.1875 4.52083 21.7917 2.91667 23.8333 2.91667H47.1667C49.2083 2.91667 50.8125 4.52083 50.8125 6.5625V30.0417C50.8125 32.0833 49.2083 33.6875 47.1667 33.6875H23.8333C21.7917 33.5417 20.1875 31.9375 20.1875 29.8958ZM30.3958 67.0833H7.0625C5.02083 67.0833 3.41667 65.4792 3.41667 63.4375V40.1042C3.41667 38.0625 5.02083 36.4583 7.0625 36.4583H30.5417C32.5833 36.4583 34.1875 38.0625 34.1875 40.1042V63.5833C34.0417 65.4792 32.4375 67.0833 30.3958 67.0833ZM67.5833 63.4375C67.5833 65.4792 65.9792 67.0833 63.9375 67.0833H40.6042C38.5625 67.0833 36.9583 65.4792 36.9583 63.4375V40.1042C36.9583 38.0625 38.5625 36.4583 40.6042 36.4583H64.0833C66.125 36.4583 67.7292 38.0625 67.7292 40.1042L67.5833 63.4375ZM41.625 25.5208C41.625 26.3958 41.0417 26.9792 40.1667 26.9792H30.8333C29.9583 26.9792 29.375 26.3958 29.375 25.5208C29.375 24.6458 29.9583 24.0625 30.8333 24.0625H34.0417V14.7292L32 17.0625C31.4167 17.6458 30.5417 17.7917 29.9583 17.2083C29.375 16.625 29.2292 15.75 29.8125 15.1667L34.4792 9.91667C34.9167 9.47917 35.5 9.33333 36.0833 9.47917C36.5208 9.77083 36.9583 10.3542 36.9583 10.9375V24.0625H40.1667C40.8958 24.0625 41.625 24.6458 41.625 25.5208ZM22.375 60.5208H15.0833C14.2083 60.5208 13.625 59.9375 13.625 59.0625V51.7708C13.625 50.8958 14.2083 50.3125 15.0833 50.3125H20.9167V45.9375H15.0833C14.2083 45.9375 13.625 45.3542 13.625 44.4792C13.625 43.6042 14.2083 43.0208 15.0833 43.0208H22.375C23.25 43.0208 23.8333 43.6042 23.8333 44.4792V51.7708C23.8333 52.6458 23.25 53.2292 22.375 53.2292H16.5417V57.6042H22.375C23.25 57.6042 23.8333 58.1875 23.8333 59.0625C23.8333 59.9375 23.25 60.5208 22.375 60.5208ZM57.0833 44.4792V51.7708V59.0625C57.0833 59.9375 56.5 60.5208 55.625 60.5208H48.9167C48.0417 60.5208 47.4583 59.9375 47.4583 59.0625C47.4583 58.1875 48.0417 57.6042 48.9167 57.6042H54.1667V53.2292H48.9167C48.0417 53.2292 47.4583 52.6458 47.4583 51.7708C47.4583 50.8958 48.0417 50.3125 48.9167 50.3125H54.1667V45.9375H48.9167C48.0417 45.9375 47.4583 45.3542 47.4583 44.4792C47.4583 43.6042 48.0417 43.0208 48.9167 43.0208H55.625C56.3542 43.0208 57.0833 43.6042 57.0833 44.4792Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-center mb-0 pt-3 ff_montserrat fw-semibold fs_lg text-white color_change">
                    25+
                  </h4>
                  <p className="text-center mb-0 pt-2 text-white fw-medium fs_sm ff_exo color_change op_70">
                    No. of Pumps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statics;