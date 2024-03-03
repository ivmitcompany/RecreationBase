import IconSize, { ICON_SIZE } from '@/types/enums/IconSize'
import { SVGAttributes } from 'react'

const getIconDimension = (size?: IconSize) => {
  const defaultSize: IconSize = 'sm'

  if (size) {
    return ICON_SIZE[size]
  }

  return ICON_SIZE[defaultSize]
}

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: IconSize
}

export const Icons = {
  arrow: ({ size, ...props }: IconProps) => {
    const dimension = getIconDimension(size)
    const WIDTH_SHIFT = 68
    return (
      <svg
        fill="none"
        height={dimension}
        viewBox="0 0 84 15"
        width={dimension + WIDTH_SHIFT}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect fill="currentColor" height="2" width="80" y="6.5" />
        <path d="M63 1L81 7.5L63 14" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  burger: ({ size, ...props }: IconProps) => {
    const dimension = getIconDimension(size)
    const WIDTH_SHIFT = 4
    return (
      <svg
        fill="none"
        height={dimension}
        viewBox="0 0 20 15"
        width={dimension + WIDTH_SHIFT}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect fill="currentColor" height="1" width="20" />
        <rect fill="currentColor" height="1" width="14" x="6" y="7" />
        <rect fill="currentColor" height="1" width="20" y="14" />
      </svg>
    )
  },
  cross: ({ size, ...props }: IconProps) => {
    const dimension = getIconDimension(size)
    return (
      <svg
        fill="none"
        height={dimension}
        viewBox="0 0 17 17"
        width={dimension}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          fill="currentColor"
          height="1.09283"
          transform="matrix(-0.707108 -0.707105 0.707108 -0.707105 16.2271 17.0001)"
          width="22.9494"
        />
        <rect
          fill="currentColor"
          height="1.09283"
          transform="matrix(0.707108 -0.707105 0.707108 0.707105 -0.000488281 16.2276)"
          width="22.9494"
        />
      </svg>
    )
  },
  logo: (props: IconProps) => (
    <svg
      fill="none"
      height="40"
      viewBox="0 0 128 40"
      width="128"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M101.421 19.7465C101.322 19.7565 101.223 19.7664 101.125 19.7765C100.5 19.8404 99.8746 19.8924 99.2481 19.934C99.0461 20.1659 98.7777 20.3692 98.5295 20.5373C98.1765 20.7762 97.8092 20.9938 97.4313 21.1911C97.0741 21.3776 96.7122 21.5561 96.3448 21.7218C96.0995 21.8325 95.854 21.9436 95.6073 22.051C95.6029 22.053 95.5991 22.0544 95.5947 22.0561C95.3977 22.1296 95.1977 22.1958 94.9968 22.2575C94.7801 22.324 94.566 22.3993 94.3546 22.4811C94.324 22.4929 94.296 22.4982 94.2631 22.4982C94.2483 22.4982 94.2336 22.4974 94.219 22.4956L93.9699 22.5823C93.65 22.6937 93.3312 22.8091 93.013 22.9252C92.5923 23.0788 92.1652 23.2155 91.735 23.3403C91.2943 23.4681 90.8503 23.585 90.4031 23.688C90.0175 23.7768 89.6126 23.842 89.2161 23.842C88.7661 23.842 88.1717 23.728 88.1717 23.1628C88.1717 23.0964 88.1791 23.0279 88.1907 22.9599C88.1286 22.99 88.0666 23.0193 88.0051 23.048C87.6292 23.2232 87.2435 23.3778 86.8525 23.516C86.4434 23.6607 86.0282 23.7884 85.6086 23.899C85.2282 23.9994 84.8272 24.0713 84.4328 24.0713C84.0392 24.0713 83.565 24.0207 83.2425 23.773C82.9798 23.5713 82.8234 23.3001 82.8234 22.9661C82.8234 22.3562 83.2627 21.7178 83.6342 21.2653C84.1987 20.5775 84.8812 19.9835 85.6034 19.4666C86.416 18.8849 87.2932 18.403 88.2133 18.0136C89.0924 17.6414 90.0274 17.4036 90.9863 17.4036C91.3249 17.4036 91.7555 17.4397 92.0377 17.6473C92.2871 17.8198 92.4073 18.076 92.4073 18.3776C92.4073 18.8605 92.1331 19.2394 91.7638 19.5275C91.4266 19.7906 91.0692 20.0373 90.6918 20.2394C90.6854 20.2428 90.6798 20.2455 90.6732 20.2484C90.5737 20.2917 90.4558 20.335 90.346 20.335C90.2243 20.335 90.1063 20.2778 90.005 20.2148C89.8507 20.1189 89.7537 19.9708 89.7537 19.787C89.7537 19.5457 89.9669 19.2925 90.1217 19.1241C90.1284 19.1169 90.1345 19.1109 90.1419 19.1045C90.2603 19.0015 90.3714 18.8752 90.4723 18.7554C90.5071 18.7142 90.609 18.5835 90.6192 18.5184C90.6152 18.5154 90.6109 18.5126 90.6084 18.5111C90.5375 18.4717 90.276 18.4669 90.1954 18.4669C89.7097 18.4669 89.1546 18.6676 88.7156 18.8605C88.0951 19.1332 87.5056 19.4669 86.9517 19.8572C86.4322 20.2232 85.9386 20.6337 85.5025 21.0965C85.2821 21.3303 84.9499 21.7337 84.9499 22.0758C84.9499 22.2303 85.0192 22.3266 85.1545 22.3986C85.352 22.5036 85.5654 22.5492 85.7887 22.5492C86.0787 22.5492 86.3792 22.4824 86.655 22.3967C86.992 22.292 87.3252 22.1746 87.6527 22.043C87.9453 21.9255 88.2343 21.795 88.512 21.6454C88.6415 21.5757 88.8643 21.4617 88.9744 21.3659C89.0497 21.3004 89.125 21.2349 89.2002 21.1694C89.3324 21.0544 89.4898 20.976 89.6681 20.976C89.7778 20.976 89.8957 21.0192 89.9953 21.0626C90.1881 21.1465 90.2982 21.3139 90.2982 21.5241C90.2982 21.5793 90.2829 21.6266 90.2506 21.6715C90.164 21.7921 90.0711 21.9341 90.0177 22.0733C89.9855 22.1575 89.9592 22.2526 89.9592 22.3434C89.9592 22.3669 89.9619 22.3956 89.9748 22.4161C90.0312 22.5057 90.2949 22.5164 90.3837 22.5164C90.6737 22.5164 90.9683 22.4716 91.2506 22.4079C91.5872 22.332 91.9214 22.2456 92.2528 22.1495C92.5649 22.059 92.8756 21.9628 93.1832 21.8581C93.4027 21.7834 93.6244 21.7082 93.847 21.6434C94.2186 21.514 94.5902 21.3847 94.9618 21.2554C95.1159 21.1887 95.274 21.1311 95.4353 21.0843C95.4594 21.0773 95.4809 21.0743 95.506 21.0743C95.5098 21.0743 95.5136 21.0744 95.5174 21.0744C96.0375 20.857 96.5491 20.6108 97.0339 20.3232C97.2234 20.2107 97.4611 20.0652 97.6768 19.9054C97.5854 19.892 97.4964 19.874 97.4127 19.8497C97.2432 19.8005 97.0601 19.7351 96.9116 19.6383C96.9014 19.6316 96.893 19.6253 96.8837 19.6172C96.7808 19.5276 96.6748 19.4167 96.6253 19.2874C96.6137 19.2572 96.6085 19.2294 96.6085 19.197C96.6085 18.8614 96.8538 18.5386 97.0716 18.3039C97.3644 17.9884 97.7003 17.7152 98.0593 17.4782C98.4245 17.2372 98.8062 17.0214 99.2034 16.8371C99.5019 16.6986 99.8805 16.5513 100.214 16.5513C100.435 16.5513 100.637 16.6334 100.741 16.8369C100.809 16.9702 100.844 17.1136 100.844 17.2632C100.844 17.4583 100.752 17.6226 100.607 17.7491C100.513 17.8307 100.413 17.9088 100.315 17.9861C100.171 18.1003 100.026 18.2148 99.8826 18.3295C99.8208 18.3789 99.7592 18.4286 99.6981 18.4789C99.8448 18.484 99.9921 18.4851 100.139 18.4851C100.327 18.4851 100.515 18.4851 100.704 18.4851C100.984 18.4851 101.266 18.4652 101.545 18.4372C101.874 18.4042 102.201 18.3607 102.528 18.3081C102.841 18.2575 103.153 18.1903 103.458 18.1018C103.482 18.0949 103.503 18.0918 103.529 18.0918C103.689 18.0918 103.825 18.1707 103.935 18.282C104.049 18.3979 104.121 18.5411 104.121 18.7054C104.121 19.0916 103.919 19.3623 103.555 19.4648C103.34 19.6007 103.13 19.7548 102.928 19.9072C102.656 20.1114 102.402 20.3392 102.167 20.5846C101.939 20.823 101.724 21.0755 101.531 21.3438C101.417 21.5028 101.296 21.7154 101.296 21.9173C101.296 22.0394 101.361 22.1153 101.462 22.1792C101.659 22.3053 102.097 22.3197 102.323 22.3197C102.952 22.3197 103.577 22.2569 104.192 22.1284C104.756 22.0108 105.315 21.8712 105.867 21.7075C105.942 21.6853 106.016 21.6628 106.091 21.6398C106.117 21.6185 106.145 21.6007 106.177 21.587C106.185 21.5836 106.191 21.5811 106.199 21.5784C106.393 21.5153 106.586 21.4503 106.778 21.3834C106.945 21.3253 107.109 21.2608 107.272 21.1924C107.774 20.9813 108.277 20.7517 108.752 20.4842C108.755 20.4827 108.757 20.4817 108.759 20.4804C109.11 20.2973 109.522 20.0697 109.821 19.8092C109.965 19.6845 110.15 19.5037 110.226 19.3264C110.295 19.167 110.378 19.0011 110.483 18.8629C110.607 18.7013 110.782 18.6162 110.986 18.6162C111.195 18.6162 111.397 18.6611 111.58 18.7626C111.807 18.8887 111.917 19.1048 111.917 19.3609C111.917 19.5075 111.841 19.649 111.76 19.7666C111.757 19.7703 111.755 19.7732 111.752 19.7767C111.664 19.8915 111.577 20.0062 111.489 20.121C111.362 20.2859 111.251 20.463 111.152 20.6453C111.041 20.8501 110.946 21.0642 110.866 21.2831C110.796 21.4755 110.75 21.679 110.75 21.8845C110.75 22.064 110.83 22.2 110.964 22.3165C111.158 22.4853 111.494 22.5164 111.739 22.5164C112.029 22.5164 112.324 22.4716 112.606 22.4079C112.943 22.332 113.277 22.2456 113.608 22.1495C113.92 22.059 114.231 21.9628 114.539 21.8581C114.758 21.7834 114.98 21.7082 115.203 21.6434C115.574 21.514 115.946 21.3848 116.317 21.2554C116.333 21.2487 116.348 21.2422 116.363 21.2358C116.403 21.1753 116.445 21.116 116.488 21.0575C116.802 20.6289 117.155 20.2273 117.529 19.8494C117.897 19.4771 118.277 19.1152 118.673 18.7713C118.89 18.5818 119.166 18.3358 119.42 18.1757C119.473 18.1102 119.555 18.0699 119.649 18.0699H119.799C119.971 18.0699 120.136 18.1162 120.267 18.2305C120.352 18.3044 120.392 18.4086 120.392 18.5197C120.392 18.5954 120.362 18.6607 120.305 18.7105C119.931 19.0361 119.561 19.3759 119.222 19.7375C118.993 19.9804 118.759 20.2516 118.584 20.5363C118.437 20.7767 118.17 21.2442 118.17 21.535C118.17 21.6302 118.193 21.7121 118.262 21.7792C118.338 21.8528 118.426 21.9165 118.527 21.9514C118.533 21.9537 118.539 21.9557 118.545 21.9584C118.668 22.0121 118.799 22.0357 118.933 22.0357C119.528 22.0357 120.18 21.7723 120.701 21.5062C121.42 21.1396 122.115 20.7289 122.783 20.2766C123.381 19.8724 123.972 19.4535 124.539 19.0088C124.728 18.861 124.917 18.7123 125.102 18.5595C125.166 18.5066 125.271 18.4254 125.325 18.3633C125.335 18.3504 125.345 18.34 125.358 18.329C125.457 18.2424 125.576 18.1682 125.713 18.1682C125.937 18.1682 126.079 18.3341 126.079 18.5524C126.079 18.7992 125.954 19.0106 125.786 19.1828C124.91 20.1915 124.04 21.2052 123.175 22.2231C122.413 23.1201 121.656 24.0215 120.904 24.927C121.406 24.861 121.91 24.809 122.415 24.7678C123.124 24.71 123.834 24.6796 124.545 24.6796C125.024 24.6796 125.504 24.683 125.983 24.696C126.32 24.7052 126.657 24.7123 126.993 24.7123C127.273 24.7123 127.675 24.7366 127.846 24.996C127.959 25.169 128 25.3671 128 25.5717C128 26.1436 127.417 26.2672 126.956 26.2672C126.94 26.2672 126.927 26.266 126.912 26.2635C126.51 26.1935 126.051 26.1739 125.643 26.1522C124.964 26.116 124.283 26.1034 123.604 26.1034C122.93 26.1034 122.255 26.1184 121.582 26.1522C120.967 26.1831 120.353 26.2385 119.742 26.3178C118.343 27.9819 116.926 29.6303 115.489 31.2615C114.157 32.7727 112.778 34.2489 111.332 35.6513C110.176 36.7723 108.936 37.8609 107.608 38.7753C106.735 39.3769 105.599 40 104.508 40C103.888 40 103.335 39.7964 102.994 39.2597C102.701 38.7973 102.56 38.2889 102.56 37.7422C102.56 36.1515 103.096 34.7158 104.019 33.427C105.048 31.9918 106.367 30.7904 107.808 29.7784C109.462 28.6171 111.273 27.6938 113.154 26.9585C115.104 26.1956 117.117 25.6022 119.175 25.2034C119.763 24.5132 120.34 23.813 120.899 23.0996C121.208 22.7057 121.515 22.3106 121.82 21.9131C121.705 21.9739 121.589 22.0325 121.475 22.0892C121.02 22.3157 120.554 22.5203 120.08 22.7048C119.609 22.888 119.13 23.0506 118.644 23.1878C118.26 23.2961 117.827 23.394 117.427 23.394C116.679 23.394 116.082 23.104 116.012 22.3433L115.325 22.5823C115.006 22.6937 114.687 22.8091 114.369 22.9252C113.948 23.0788 113.521 23.2155 113.091 23.3403C112.65 23.4681 112.206 23.585 111.759 23.688C111.373 23.7768 110.968 23.842 110.572 23.842C110.26 23.842 109.93 23.7922 109.663 23.6218C109.464 23.4949 109.284 23.3394 109.144 23.1491C109.022 22.984 108.925 22.8006 108.876 22.6005C108.843 22.467 108.812 22.3173 108.812 22.1795C108.812 21.9475 108.849 21.7222 108.929 21.509C108.791 21.5766 108.651 21.6422 108.51 21.7056C108.31 21.7958 108.104 21.887 107.897 21.9639C107.878 21.979 107.858 21.9928 107.836 22.0052C107.824 22.0122 107.813 22.0174 107.8 22.0224C106.964 22.3433 106.116 22.634 105.256 22.8815C104.498 23.0997 103.733 23.2943 102.963 23.4696C102.266 23.6286 101.534 23.7436 100.817 23.7436C100.809 23.7436 100.802 23.7433 100.795 23.7426C100.16 23.6873 99.4334 23.4562 99.4334 22.6984C99.4334 22.3106 99.6087 21.9254 99.8109 21.6027C100.05 21.2214 100.325 20.8647 100.63 20.5334C100.882 20.2598 101.144 19.9952 101.421 19.7465ZM80.4708 21.7617C80.1633 23.0351 79.9782 24.3424 79.9782 25.6537C79.9782 25.9078 79.9527 26.23 79.7977 26.442C79.627 26.6752 79.3169 26.7261 79.0468 26.7261C79.0382 26.7261 79.0309 26.7259 79.0224 26.7249L78.6804 26.6918C78.401 26.6614 78.1777 26.5186 78.0756 26.252C77.9948 26.0409 77.9648 25.8132 77.9648 25.588C77.9648 24.6474 78.0607 23.7124 78.2452 22.7916C77.7096 23.0022 77.1635 23.1899 76.609 23.3413C76.0345 23.4981 75.4257 23.6124 74.8284 23.6124C74.3895 23.6124 73.9032 23.5502 73.5252 23.3109C73.2525 23.1383 73.0038 22.9189 72.8408 22.6374C72.7716 22.5263 72.7144 22.4095 72.6689 22.288L71.8233 22.5823C71.5034 22.6936 71.1847 22.809 70.8665 22.9251C70.4457 23.0787 70.0185 23.2154 69.5884 23.3402C69.1477 23.468 68.7037 23.5849 68.2564 23.6879C67.8709 23.7767 67.4661 23.8419 67.0696 23.8419C66.6937 23.8419 66.2061 23.7972 65.9174 23.5279C65.6903 23.3161 65.5733 23.0469 65.5733 22.7366C65.5733 22.4379 65.6482 22.1447 65.762 21.8699C65.8767 21.5924 66.0061 21.3211 66.1507 21.058C66.2508 20.8758 66.353 20.6944 66.4593 20.5155C66.3829 20.5515 66.3157 20.5849 66.2785 20.6034C65.8751 20.804 65.4775 21.0181 65.0837 21.2371C64.5927 21.51 64.1047 21.7886 63.6188 22.0705C63.1191 22.3605 62.6143 22.6421 62.1032 22.9113C61.6717 23.1386 61.2343 23.3576 60.7895 23.5574C60.5258 23.6758 60.1304 23.8419 59.838 23.8419C59.6353 23.8419 59.4478 23.7818 59.2873 23.6577C59.1176 23.5264 59.0197 23.3455 59.0197 23.1299C59.0197 22.8508 59.1703 22.5855 59.3355 22.3699C59.5274 22.1194 59.7374 21.8826 59.9588 21.6578C60.1861 21.427 60.4195 21.2019 60.6584 20.9829C60.4889 21.0601 60.3194 21.137 60.1498 21.2137C59.8171 21.3642 59.4831 21.512 59.1483 21.6576C58.945 21.7461 58.7411 21.8339 58.5358 21.9177C58.512 21.9382 58.4862 21.9563 58.4588 21.9721C58.4441 21.9807 58.4309 21.9867 58.4149 21.9924L56.7201 22.5823C56.4001 22.6936 56.0814 22.809 55.7632 22.9251C55.3424 23.0787 54.9153 23.2154 54.4851 23.3402C54.0444 23.468 53.6004 23.5849 53.1531 23.6879C52.7677 23.7767 52.3627 23.8419 51.9662 23.8419C51.6547 23.8419 51.3247 23.7921 51.0577 23.6218C50.8587 23.4948 50.6788 23.3394 50.5382 23.1491C50.4162 22.9839 50.3194 22.8006 50.2701 22.6005C50.2372 22.467 50.2063 22.3173 50.2063 22.1795C50.2063 21.9474 50.2437 21.7221 50.3241 21.5089C50.1852 21.5765 50.0454 21.6421 49.9047 21.7056C49.6562 21.8174 49.3705 21.9493 49.1083 22.0265C48.9142 22.0987 48.7172 22.1639 48.5191 22.2247C48.3024 22.2913 48.0885 22.3665 47.8771 22.4483C47.8465 22.4601 47.8183 22.4653 47.7855 22.4653C47.6423 22.4653 47.5245 22.3892 47.445 22.2739C47.3853 22.1873 47.3438 22.0894 47.3438 21.9828C47.3438 21.8152 47.4097 21.6574 47.5712 21.587C47.5789 21.5836 47.5857 21.581 47.5938 21.5784C47.7874 21.5152 47.9805 21.4503 48.1729 21.3834C48.3397 21.3253 48.5037 21.2608 48.6665 21.1924C49.169 20.9813 49.6718 20.7517 50.1469 20.4841C50.1494 20.4829 50.1515 20.4816 50.154 20.4803C50.5046 20.2972 50.9166 20.0696 51.216 19.8091C51.3593 19.6845 51.5441 19.5037 51.6205 19.3264C51.6891 19.167 51.7721 19.0012 51.8779 18.8629C52.0018 18.7013 52.1769 18.6161 52.3805 18.6161C52.5893 18.6161 52.791 18.6611 52.9743 18.7625C53.2019 18.8887 53.3119 19.1048 53.3119 19.3609C53.3119 19.5074 53.2354 19.6489 53.1542 19.7666C53.1517 19.7702 53.1495 19.7733 53.1467 19.7768C53.0589 19.8915 52.971 20.0062 52.8832 20.1209C52.7568 20.2857 52.6459 20.4629 52.5467 20.6452C52.4352 20.85 52.3408 21.0641 52.2608 21.283C52.1904 21.4754 52.1443 21.6789 52.1443 21.8845C52.1443 22.0639 52.2248 22.1999 52.3587 22.3164C52.5527 22.4852 52.8889 22.5164 53.1339 22.5164C53.4238 22.5164 53.7184 22.4716 54.0008 22.4078C54.3373 22.332 54.6715 22.2455 55.0029 22.1495C55.315 22.0589 55.6258 21.9628 55.9334 21.858C56.1527 21.7833 56.3745 21.7081 56.5971 21.6434L56.6991 21.6079C56.7371 21.5789 56.7791 21.5578 56.8215 21.5456C57.0106 21.4839 57.2 21.4232 57.3899 21.3642C57.4439 21.3474 57.4976 21.3298 57.5509 21.3114C57.5527 21.3106 57.5541 21.3101 57.5558 21.3096L57.573 21.3036C57.6677 21.2701 57.7615 21.2337 57.8536 21.1936C57.8583 21.1916 57.8623 21.1899 57.8672 21.1881C58.4796 20.9627 59.0836 20.7117 59.6711 20.4276C60.1809 20.1811 60.6879 19.9276 61.1879 19.6617C61.1901 19.6607 61.1919 19.6597 61.194 19.6586C61.6885 19.4127 62.1733 19.1455 62.6409 18.8516C62.6522 18.8445 62.6623 18.8392 62.6745 18.8339C62.7546 18.799 62.8403 18.7704 62.9232 18.7433C63.0463 18.7031 63.1737 18.6816 63.3032 18.6816C63.6728 18.6816 63.8579 18.9458 63.8579 19.2952C63.8579 19.5981 63.6473 19.8957 63.4576 20.1158C63.2096 20.4036 62.9436 20.6764 62.6676 20.9375C62.4058 21.1851 62.1508 21.4414 61.9098 21.7094C61.8496 21.7763 61.6413 22.021 61.6357 22.1139C61.6357 22.1156 61.6357 22.1176 61.6357 22.1198C61.6523 22.1224 61.673 22.123 61.6836 22.123C61.8331 22.123 62.3312 21.852 62.4643 21.7781C62.9799 21.4914 63.4936 21.2017 64.0066 20.9106C64.5841 20.5829 65.1616 20.2551 65.7392 19.9274C66.2018 19.6648 66.676 19.4038 67.1584 19.1782C67.2407 19.1116 67.3387 19.0511 67.4272 18.9972C67.5796 18.9044 67.7385 18.8204 67.8982 18.741C68.0708 18.6552 68.2463 18.575 68.4252 18.5033C68.5914 18.4365 68.7724 18.3866 68.9528 18.3866C69.158 18.3866 69.3515 18.4683 69.4195 18.6756C69.4465 18.7575 69.4699 18.8479 69.4699 18.9347C69.4699 19.0729 69.4296 19.2035 69.3609 19.3228C69.3107 19.4103 69.2605 19.4976 69.2103 19.585C69.2019 19.5996 69.1935 19.6115 69.1826 19.6242C69.0556 19.7714 68.9332 19.9251 68.8114 20.0765C68.6334 20.2978 68.4706 20.5315 68.3206 20.7726C68.1622 21.0272 68.0149 21.2885 67.8795 21.5561C67.785 21.743 67.6996 21.967 67.6996 22.1794C67.6996 22.2458 67.7098 22.3202 67.7507 22.3748C67.8443 22.5001 68.0975 22.5163 68.2372 22.5163C68.5272 22.5163 68.8217 22.4715 69.104 22.4078C69.4407 22.3319 69.7748 22.2455 70.1062 22.1494C70.4183 22.0589 70.7291 21.9627 71.0367 21.858C71.256 21.7833 71.4779 21.7081 71.7005 21.6433L72.569 21.341C72.6575 20.8015 72.9499 20.3503 73.3578 19.9771C73.9031 19.4784 74.5407 19.0952 75.2168 18.801C75.9415 18.4857 76.6956 18.2463 77.4684 18.0809C78.1266 17.9401 78.8242 17.8295 79.4988 17.8295C79.6849 17.8295 79.8512 17.8878 79.9521 18.0084C80.1589 17.5672 80.3774 17.1317 80.6058 16.7021C81.512 14.9966 82.5455 13.361 83.6886 11.804C84.8421 10.2328 86.0959 8.7374 87.4521 7.33669C88.7118 6.03557 90.0494 4.79795 91.4843 3.69074C92.6991 2.75323 93.9993 1.89047 95.3831 1.22148C96.435 0.712933 97.6391 0.29488 98.8205 0.29488C99.3866 0.29488 99.9576 0.43512 100.32 0.900608C100.685 1.36934 100.769 2.0372 100.769 2.61279C100.769 3.48017 100.256 4.45508 99.8075 5.17219C99.0859 6.32557 98.2143 7.41348 97.3159 8.43356C96.1814 9.72186 94.9603 10.9402 93.701 12.1065C92.3081 13.3963 90.8628 14.6292 89.3734 15.8065C87.8903 16.9788 86.3663 18.0999 84.801 19.1605C83.4083 20.1043 81.9662 20.9884 80.4708 21.7617ZM79.5999 18.7918C79.5792 18.7936 79.5581 18.7945 79.5364 18.7945C79.5232 18.7945 79.512 18.7938 79.499 18.7917L79.2981 18.7618C78.7556 18.7638 78.2157 18.8494 77.6909 18.9833C77.1332 19.1256 76.5927 19.3234 76.0803 19.5861C75.6457 19.8087 75.2281 20.0904 74.8953 20.4502C74.6508 20.7146 74.4792 21.0264 74.4792 21.3929C74.4792 21.5785 74.5236 21.7504 74.6623 21.8798C74.7988 22.0071 74.9548 22.1102 75.1331 22.1684C75.1349 22.1689 75.1362 22.1694 75.1379 22.1699C75.3773 22.2532 75.63 22.2869 75.883 22.2869C76.7811 22.2869 77.7796 21.9368 78.6028 21.571C78.8733 20.6241 79.2106 19.697 79.5999 18.7918ZM56.3251 15.1002C56.3251 15.3214 56.2481 15.5358 56.144 15.7284C56.0311 15.9371 55.8915 16.1292 55.731 16.3037C55.5651 16.4841 55.3752 16.6381 55.1631 16.7611C54.9442 16.8881 54.7057 16.9591 54.4521 16.9591C53.943 16.9591 53.5207 16.7402 53.5207 16.1817C53.5207 15.9605 53.5977 15.746 53.7018 15.5534C53.8146 15.3447 53.9543 15.1528 54.1147 14.9782C54.2859 14.7921 54.4853 14.6382 54.7075 14.5174C54.9186 14.4025 55.1512 14.3226 55.3937 14.3226C55.9028 14.3226 56.3251 14.5417 56.3251 15.1002ZM12.0987 26.8347C13.5793 25.291 15.0114 23.7 16.4076 22.08C17.9164 20.3294 19.4396 18.5911 20.9747 16.8634C20.4622 16.2 20.2257 15.4274 20.2257 14.5757C20.2257 13.6991 20.449 12.8547 20.8137 12.0612C21.1961 11.2295 21.6794 10.4527 22.2605 9.74489C22.8206 9.06234 23.4734 8.46944 24.2245 8.00252C24.8646 7.6047 25.5906 7.30878 26.3547 7.30878C26.6534 7.30878 26.8717 7.48185 26.8717 7.79131C26.8717 8.06835 26.6306 8.21741 26.3958 8.29408C26.3886 8.29634 26.3823 8.29815 26.3749 8.29994C25.746 8.44722 25.1652 8.7115 24.6352 9.08051C24.1005 9.45274 23.6241 9.89503 23.2204 10.4062C22.8231 10.9091 22.508 11.4623 22.2788 12.0605C22.0668 12.614 21.9377 13.1948 21.9377 13.7891C21.9377 14.3542 22.0544 14.8869 22.3226 15.3699C24.0252 13.479 25.774 11.6295 27.5685 9.82527C29.3417 8.04241 31.2231 6.36009 33.2255 4.83689C35.0095 3.47984 36.922 2.27394 38.9602 1.33429C40.7582 0.505322 42.671 0 44.6595 0C45.7116 0 47.0853 0.117641 47.9567 0.771809C48.6643 1.3031 49.0183 2.02448 49.0183 2.90783C49.0183 3.96773 48.5662 5.03306 48.0425 5.93535C47.3302 7.16272 46.4178 8.29308 45.4467 9.32477C44.2717 10.5732 42.9616 11.7004 41.5915 12.7295C40.0923 13.8557 38.4966 14.8461 36.8282 15.7021C35.1429 16.5667 33.3836 17.2759 31.5683 17.8171C29.7988 18.3447 27.9767 18.6307 26.1286 18.6307C25.277 18.6307 24.3831 18.5653 23.5581 18.3434C23.0052 18.1947 22.4478 17.9883 21.9543 17.6901C20.5271 19.264 19.1063 20.8436 17.6928 22.4297C16.5033 23.7645 15.2963 25.0842 14.0681 26.3838C15.9927 25.9904 17.9441 25.6984 19.8921 25.4644C22.2855 25.1768 24.6919 24.9775 27.0981 24.8338C32.279 24.5241 37.495 24.4632 42.6845 24.5489C43.1134 24.0448 43.5391 23.537 43.9532 23.0209C44.0328 22.9216 44.2728 22.6249 44.4374 22.3885C44.2761 22.4597 44.1155 22.5328 43.9552 22.6062C43.6838 22.7305 43.4023 22.8355 43.1186 22.9281C42.807 23.0298 42.4898 23.114 42.1689 23.1811C41.8613 23.2453 41.5466 23.2848 41.232 23.2848C40.8562 23.2848 40.4959 23.2 40.1753 23.0007C39.9526 22.8623 39.8071 22.6686 39.7294 22.4379C38.8013 22.7276 37.7892 22.957 36.8253 22.957C36.2818 22.957 35.745 22.843 35.3167 22.5136C34.6775 23.0444 33.9749 23.4883 33.2255 23.8495C32.4272 24.2343 31.576 24.4647 30.686 24.4647C30.3471 24.4647 29.993 24.4044 29.711 24.2051C29.4006 23.9856 29.3027 23.6246 29.3027 23.2611C29.3027 22.641 29.6933 21.9901 30.0484 21.5056C30.5493 20.8223 31.1307 20.1998 31.7589 19.632C32.3943 19.0579 33.0787 18.5369 33.8133 18.0952C34.339 17.7791 35.0299 17.4363 35.6576 17.4363C35.8393 17.4363 36.0075 17.493 36.1577 17.5946C36.2937 17.6867 36.4215 17.8129 36.4369 17.9828C36.6471 17.9233 36.8655 17.8951 37.0889 17.8951C37.6437 17.8951 38.0579 18.1503 38.0579 18.7436C38.0579 19.2456 37.7736 19.7891 37.5096 20.2018C37.1676 20.7364 36.7432 21.226 36.2918 21.675C36.5314 21.8408 36.8275 21.8937 37.1266 21.8937C37.4781 21.8937 37.8292 21.8593 38.1753 21.7991C38.5306 21.7373 38.8847 21.6678 39.2364 21.5885C39.3969 21.5523 39.5568 21.5129 39.7153 21.4685C39.8619 20.7898 40.2863 20.2247 40.7985 19.7629C41.5581 19.0784 42.4238 18.5267 43.3442 18.084C44.2851 17.6316 45.2614 17.2545 46.2665 16.9706C46.9521 16.7769 47.8233 16.5513 48.5388 16.5513C48.8879 16.5513 49.2248 16.6301 49.544 16.7691C49.9547 16.9478 50.1556 17.2992 50.1852 17.7379C50.1857 17.7439 50.1857 17.7489 50.1857 17.7549C50.1857 18.0037 50.0163 18.2312 49.8528 18.404C49.6494 18.6189 49.4128 18.8004 49.1603 18.9542C48.9147 19.1038 48.6612 19.2416 48.3996 19.3615C48.1915 19.4568 47.9418 19.5484 47.7101 19.5484C47.5066 19.5484 47.3147 19.4865 47.1791 19.3294C47.0663 19.1984 47.0047 19.0422 47.0047 18.8692C47.0047 18.6483 47.1148 18.4727 47.3022 18.3647C47.3817 18.2996 47.4766 18.2423 47.564 18.1916C47.6812 18.1236 47.8001 18.0585 47.9201 17.9956C48.0184 17.9295 48.097 17.8467 48.097 17.7221C48.097 17.7193 48.097 17.7148 48.0965 17.7109C48.0581 17.6855 47.9367 17.6802 47.8985 17.6802C47.3108 17.6802 46.6884 17.8616 46.1448 18.0727C45.4568 18.34 44.7975 18.6728 44.1734 19.0668C43.5962 19.4312 43.0524 19.8556 42.5843 20.3535C42.2995 20.6564 41.975 21.0873 41.975 21.5241C41.975 21.624 42.0086 21.679 42.0982 21.7236C42.2407 21.7944 42.391 21.8281 42.5502 21.8281C42.9069 21.8281 43.2635 21.7542 43.6014 21.644C43.9964 21.5151 44.3824 21.3599 44.7573 21.181C45.136 21.0003 45.5063 20.802 45.866 20.5861C46.17 20.4037 46.4728 20.2148 46.764 20.0126C46.8938 19.9029 47.0473 19.8288 47.2206 19.8288C47.4906 19.8288 47.6623 20.0118 47.6623 20.2786C47.6623 20.5102 47.5621 20.7096 47.4061 20.8771C46.74 21.592 46.0763 22.3093 45.4098 23.0239C44.9327 23.5354 44.4613 24.0523 43.9949 24.5737C45.4941 24.6061 46.9933 24.6516 48.4917 24.7118C57.2073 25.0617 65.939 24.8304 74.6501 24.4659C74.9848 24.4519 75.333 24.4553 75.6671 24.4732C75.9119 24.4863 76.1764 24.5077 76.4152 24.5641C76.6439 24.6182 76.9292 24.7346 76.9292 25.0137C76.9292 26.0032 74.8749 26.1291 74.174 26.1417C72.1086 26.1788 70.0444 26.2391 67.9794 26.294C65.4296 26.362 62.8845 26.4065 60.3335 26.4036C56.456 26.3991 52.5765 26.3076 48.701 26.1865C46.6987 26.1239 44.6994 26.031 42.6961 25.9802L42.6049 26.0736C41.0747 27.7556 39.5829 29.4724 38.0481 31.1503C36.6853 32.6403 35.2806 34.0968 33.8175 35.4891C32.6465 36.6033 31.411 37.6925 30.1002 38.6408C29.3494 39.1841 28.2205 39.9016 27.2586 39.9016C26.6904 39.9016 26.1421 39.7586 25.726 39.3548C25.3331 38.9734 25.1596 38.4882 25.1596 37.9443C25.1596 36.6798 25.6606 35.4388 26.2859 34.3597C27.1195 32.9214 28.3099 31.6799 29.5822 30.6213C31.1915 29.2824 33.0517 28.2158 34.9489 27.3412C36.1888 26.7697 37.4783 26.3043 38.7915 25.9244C35.4338 25.915 32.079 26.0075 28.7253 26.2046C23.39 26.518 18.0713 27.0898 12.7866 27.8847C12.3405 28.3431 11.8757 28.7868 11.4093 29.2241C10.8167 29.7798 10.2155 30.326 9.61392 30.8719C8.80924 31.6022 7.96982 32.3042 7.08672 32.9385C6.36566 33.4564 5.59481 33.9318 4.78162 34.2918C4.13041 34.5802 3.41899 34.7887 2.70158 34.7887C1.79557 34.7887 0 34.6933 0 33.4213C0 32.8237 0.485388 32.2365 0.882882 31.8342C1.55848 31.1506 2.44086 30.578 3.27288 30.1042C4.47653 29.4189 5.78117 28.8587 7.07458 28.3668C8.70936 27.7453 10.4003 27.2507 12.0987 26.8347ZM35.6225 18.4012C35.31 18.4828 34.9409 18.6986 34.7191 18.8377C34.1653 19.1851 33.6429 19.5817 33.15 20.0105C32.665 20.4326 32.2164 20.8987 31.8305 21.4135C31.6255 21.687 31.316 22.1501 31.316 22.5073C31.316 22.8876 31.5376 22.9752 31.8913 22.9752C32.3759 22.9752 32.875 22.7993 33.3062 22.5908C33.7949 22.3545 34.2586 22.0719 34.6934 21.7479C34.5515 21.4328 34.5003 21.0831 34.5003 20.7374C34.5003 20.3884 34.5674 20.0466 34.6845 19.7184C34.8032 19.3857 34.9726 19.077 35.1995 18.8054C35.326 18.654 35.4677 18.5194 35.6225 18.4012ZM114.931 15.1002C114.931 15.3214 114.854 15.5358 114.749 15.7284C114.637 15.9371 114.497 16.1291 114.336 16.3037C114.171 16.4841 113.981 16.6381 113.769 16.7611C113.55 16.8881 113.311 16.9591 113.058 16.9591C112.548 16.9591 112.126 16.7402 112.126 16.1817C112.126 15.9605 112.203 15.746 112.307 15.5534C112.42 15.3447 112.56 15.1528 112.72 14.9782C112.891 14.7921 113.091 14.6382 113.313 14.5174C113.524 14.4025 113.757 14.3226 113.999 14.3226C114.508 14.3226 114.931 14.5417 114.931 15.1002ZM118.08 26.5792C116.258 26.9231 114.462 27.4357 112.764 28.1796C111.167 28.8792 109.613 29.7507 108.266 30.8632C107.164 31.7737 106.172 32.8404 105.463 34.0871C104.886 35.0998 104.497 36.212 104.497 37.3871C104.497 37.6799 104.611 37.959 104.762 38.2054C104.927 38.4761 105.175 38.5761 105.487 38.5761C105.883 38.5761 106.402 38.2812 106.725 38.0751C107.389 37.6518 108.02 37.1485 108.618 36.6376C109.415 35.956 110.179 35.2303 110.919 34.4882C111.783 33.6232 112.627 32.7389 113.455 31.8406C114.331 30.8905 115.196 29.9302 116.05 28.9606C116.739 28.178 117.417 27.3846 118.08 26.5792ZM80.865 20.4186C81.9994 19.7963 83.1031 19.1116 84.1794 18.3963C85.5853 17.4621 86.9476 16.4629 88.267 15.4104C89.6164 14.3341 90.9248 13.2065 92.1883 12.0308C93.3549 10.9453 94.4752 9.79969 95.5001 8.57919C96.3446 7.57355 97.1357 6.49377 97.7698 5.34229C98.2051 4.55181 98.6048 3.59534 98.6048 2.67845C98.6048 2.39699 98.5346 2.13607 98.2967 1.96674C98.0259 1.77387 97.6772 1.71886 97.3516 1.71886C96.5888 1.71886 95.7202 2.10414 95.0612 2.4587C93.9854 3.0377 92.9718 3.78196 92.0335 4.56091C90.8482 5.54494 89.7375 6.62679 88.6857 7.75104C87.5119 9.00563 86.428 10.3422 85.4301 11.7401C84.4018 13.1804 83.4714 14.6883 82.6416 16.2511C81.9319 17.5877 81.3306 18.9795 80.865 20.4186ZM40.7747 26.6869C39.0361 27.0172 37.3276 27.5106 35.7018 28.213C34.1059 28.9024 32.5558 29.7512 31.1805 30.8189C30.0441 31.7011 29.0154 32.7444 28.2662 33.9786C27.6539 34.9871 27.2484 36.0985 27.2484 37.2888C27.2484 37.5658 27.2963 37.8416 27.4264 38.0887C27.5326 38.2903 27.7175 38.3467 27.9366 38.3467C28.278 38.3467 28.8404 37.997 29.1148 37.8153C29.8061 37.3575 30.4697 36.8355 31.1081 36.3073C31.9541 35.6074 32.7686 34.8662 33.5615 34.1072C34.4618 33.2453 35.3514 32.372 36.2314 31.4893C37.1296 30.5883 38.0131 29.6726 38.8809 28.7423C39.5164 28.0611 40.1483 27.3764 40.7747 26.6869ZM35.7681 20.8528C36.0366 20.5985 36.2893 20.3247 36.5089 20.0293C36.6477 19.8426 36.8732 19.5062 36.8732 19.2625C36.8732 19.2293 36.8689 19.1895 36.8496 19.1611C36.7862 19.0676 36.5456 19.0567 36.4486 19.0567C36.2249 19.0567 36.0759 19.2295 35.9697 19.4082C35.7988 19.6958 35.7228 20.01 35.7228 20.3442C35.7228 20.4947 35.7327 20.6461 35.7571 20.7948C35.7603 20.8142 35.764 20.8335 35.7681 20.8528ZM10.3357 28.6504C9.21066 28.8806 8.08375 29.1566 6.99975 29.5155C6.05294 29.8289 5.0773 30.1939 4.19528 30.6622C3.66337 30.9447 3.04249 31.3122 2.61945 31.7461C2.43558 31.9347 2.16404 32.2551 2.16404 32.5364C2.16404 32.6038 2.17536 32.6702 2.20663 32.7305C2.38599 33.0757 3.169 33.1027 3.49256 33.1027C4.67759 33.1027 5.86371 32.4279 6.78777 31.7432C8.0396 30.8156 9.22057 29.7501 10.3357 28.6504ZM23.1826 16.316C23.5579 16.5911 23.9919 16.7848 24.4343 16.9235C25.1466 17.1467 25.9508 17.2068 26.6937 17.2068C28.2421 17.2068 29.7718 16.9529 31.2542 16.5126C32.8319 16.0441 34.36 15.4279 35.8246 14.6783C37.2861 13.9301 38.6868 13.0688 40.008 12.0943C41.223 11.1981 42.3872 10.2194 43.4422 9.13865C44.3087 8.25097 45.1252 7.27216 45.7597 6.20369C46.1916 5.47655 46.5905 4.58863 46.5905 3.72724C46.5905 3.03172 46.2929 2.509 45.7212 2.11681C44.9387 1.57991 43.657 1.48942 42.7385 1.48942C41.2007 1.48942 39.7023 2.01163 38.3561 2.7219C36.6115 3.64237 34.98 4.80938 33.4658 6.06845C31.6534 7.57556 29.9334 9.19881 28.2875 10.8849C26.552 12.663 24.851 14.4748 23.1826 16.316Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  mountain: (props: IconProps) => (
    <svg
      fill="none"
      height="28"
      viewBox="0 0 72 28"
      width="72"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 27L17.1151 13.2353L23.6619 15.7843L28.6978 10.6863L33.2302 11.1961L38.7698 1L50.3525 14.2549"
        stroke="currentColor"
      />
      <path
        d="M44.813 18.3334L55.8921 9.66669L71 26.4902"
        stroke="currentColor"
      />
      <path
        d="M40.2805 25.4706L51.3597 19.8627L55.892 10.1765"
        stroke="currentColor"
      />
      <path
        d="M17.115 13.7451L20.1366 19.3529L19.633 25.4706L29.2013 15.2745L33.2301 21.902L37.2589 13.7451L38.7697 1"
        stroke="currentColor"
      />
    </svg>
  ),
  photos: ({ size, ...props }: IconProps) => {
    const dimension = getIconDimension(size)
    return (
      <svg
        fill="none"
        height={dimension}
        viewBox="0 0 17 17"
        width={dimension}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(1 0 4.72045e-06 1 0 0)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-4.37114e-08 1 -1 4.67674e-06 17 0)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-1 -8.74228e-08 -4.63302e-06 -1 17 17)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-4.37114e-08 1 -1 4.67674e-06 1 0)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-1 -8.74228e-08 -4.63302e-06 -1 17 1)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(1.31134e-07 -1 1 -4.58931e-06 16 17)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-4.37114e-08 1 -1 4.67674e-06 1 11)"
          width="6"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-1 -8.74228e-08 -4.63302e-06 -1 12 9)"
          width="7"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-4.37114e-08 1 -1 4.67674e-06 9 5)"
          width="7"
        />
        <rect
          fill="currentColor"
          height="1"
          transform="matrix(-1 -8.74228e-08 -4.63302e-06 -1 6 17)"
          width="6"
        />
      </svg>
    )
  },
  tilda: (props: IconProps) => (
    <svg
      fill="none"
      height="10"
      viewBox="0 0 32 10"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.205126 10C0.0683752 9.86928 0 9.6732 0 9.41177C0 8.88889 0.136751 8.36601 0.410254 7.84314C1.50427 6.01307 2.94017 4.44444 4.71795 3.13726C6.63248 1.83006 8.68376 1.17647 10.8718 1.17647C13.3333 1.17647 15.3162 1.89542 16.8205 3.33333C18.3248 4.77124 20.1709 5.4902 22.359 5.4902C24.6838 5.4902 26.5299 4.90196 27.8974 3.72549C29.4017 2.4183 30.7009 1.17647 31.7949 0C31.7949 0 31.7949 0.0653586 31.7949 0.196076C31.9316 0.196076 32 0.261436 32 0.392158C32 1.30719 31.7265 2.15686 31.1795 2.94117C30.4957 4.24837 29.1966 5.75163 27.282 7.45098C25.5043 9.0196 23.2479 9.80392 20.5128 9.80392C18.4615 9.80392 16.6838 9.08496 15.1795 7.64706C13.6752 6.20915 11.7607 5.4902 9.43589 5.4902C7.65812 5.4902 5.94872 6.01307 4.30769 7.05882C2.66666 7.97385 1.29914 8.95425 0.205126 10Z"
        fill="currentColor"
      />
    </svg>
  ),
}
