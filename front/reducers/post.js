export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'yunos',
      },
      content: '첫번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src:
            'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/ThmomYfV2fLl1k3iXCe__ZywsAk.jpg',
        },
        {
          src:
            'https://images.mypetlife.co.kr/content/uploads/2020/05/15111507/zach-reiner-YVpr0OdSUe0-unsplash-scaled.jpg',
        },
        {
          src:
            'https://lh3.googleusercontent.com/proxy/3IjgtRX7BzivKQb2f2sxJ8cb1FI2-_sfY7eWcrcufIUGYwSkVLBXvX9eBtYsLPTKo5LWF9XkUtbCEVXOv45j2Vj78GVVPNgf6zwIW84-q5ibN7Xc__n1CANJtiZXsbxAmFM-MKT5qlCziK7B0rrWXMH4BbhwLA',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'naru',
          },
          content: '신난다!!',
        },
        {
          User: {
            nickname: 'hodu',
          },
          content: '배고파요ㅠㅠ',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미더미',
  User: {
    id: 1,
    nickname: 'yunos',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
