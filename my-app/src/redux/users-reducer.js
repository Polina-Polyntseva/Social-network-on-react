import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    // pageSize: 5,
    // totalUsersCount: 0,
    // currentPage: 1
  },
  reducers: {
    follow(state, action) {
      const user = state.users.find(u => u.id === action.payload);
      if (user) {
        user.followed = true;
      }
    },
    unfollow(state, action) {
      const user = state.users.find(u => u.id === action.payload);
      if (user) {
        user.followed = false;
      }
    },
    setUsers(state, action) {
      state.users = action.payload;
      // state.users = action.payload.users;
      // state.totalUsersCount = action.payload.totalCount;
    },
    // setCurrentPage(state, action) {
    //   state.currentPage = action.payload;
    // }
  },
});

export const { follow, unfollow, setUsers } = usersSlice.actions; //setCurrentPage
export default usersSlice.reducer;


// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';


// let initialState = {
//   // users: [
//   //   {id: 1, photoUrl: 'https://i.pinimg.com/originals/72/f5/c4/72f5c4ebe6d00b8af7ba85cddcdd6587.jpg', followed: true, fullName: 'Polina', status: 'ffffffffffffffffff', location: {city: 'Kazan', country: 'Russia'} },
//   //   {id: 1, photoUrl: 'https://i.pinimg.com/originals/72/f5/c4/72f5c4ebe6d00b8af7ba85cddcdd6587.jpg', followed: true, fullName: 'Polina', status: 'ffffffffffffffffff', location: {city: 'Kazan', country: 'Russia'} },
//   //   {id: 1, photoUrl: 'https://i.pinimg.com/originals/72/f5/c4/72f5c4ebe6d00b8af7ba85cddcdd6587.jpg', followed: true, fullName: 'Polina', status: 'ffffffffffffffffff', location: {city: 'Kazan', country: 'Russia'} },
//   //   {id: 1, photoUrl: 'https://i.pinimg.com/originals/72/f5/c4/72f5c4ebe6d00b8af7ba85cddcdd6587.jpg', followed: true, fullName: 'Polina', status: 'ffffffffffffffffff', location: {city: 'Kazan', country: 'Russia'} }
//   // ]
// };

// const usersReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case FOLLOW: {
//       return {
//         ...state, 
//         users: state.users.map( callback: u => {
//           if (u.id === action.userId) {
//             return {...u, followed: true}
//           }
//           return u;
//         })
//       }
//     }
//     case UNFOLLOW: {
//       return {
//         ...state, 
//         users: state.users.map( callback: u => {
//           if (u.id === action.userId) {
//             return {...u, followed: false}
//           }
//           return u;
//         })
//       }
//     }
//     case SET_USERS: {
//       return { ...state, users: [...state.users, ...action.users]}
//     }
//     default:
//       return state;
//   }
// } 

// export const followActionCreater = (userId) => ({type: FOLLOW, userId});
// export const unFollowActionCreater = (userId) => ({type: UNFOLLOW, userId});
// export const setUsersActionCreater = (users) = () => ({type: SET_USERS , users});

// export default usersReducer;