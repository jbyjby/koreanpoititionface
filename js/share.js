function shareMessage() {
  console.log("공유된다.");
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: `관상으로 보는 정치성향 테스트🥰내가 진보의 상인가? 보수의 상인가?`,
      description: "#관상테스트 #410총선 #진보 #보수 #투표소찾기 #우리동네현안보기",
      imageUrl: "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "http://127.0.0.1:5500",
        webUrl: "http://127.0.0.1:5500",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "나도 해보기",
        link: {
          mobileWebUrl: "http://127.0.0.1:5500",
          webUrl: "hhttp://127.0.0.1:5500",
        },
      },
      {
        title: "투표소찾기",
        link: {
          mobileWebUrl: "https://nec.go.kr",
          webUrl: "https://nec.go.kr",
        },
      },
    ],
  });
}
