import React from "react";
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';

const Users = (props) => {

  // let usersPaginations = props.currentPage.map(p => <span className={props.currentPage === p && s.celectedPage}>{p}</span>)

  return (
    <div>
      {/* { usersPaginations } */}
      {props.usersPage.map(u => ( // Используйте usersPage, а не items
        <div key={u.id}>
          <div>
            <div>
              {/* <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} /> */}
              <img className={s.avatar} src={u.photos.small ? u.photos.small : userPhoto} alt={u.name} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              {/* <div>{'u.location.country'}</div> */}
              {/* <div>{'u.location.city'}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

//В формате класса
// import React from "react";
// import axios from 'axios';
// import userPhoto from '../../assets/images/user.png';
// import s from './Users.module.css';

// class Users extends React.Component {

//   componentDidMount() {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users")
//       .then(response => {
//         this.props.setUsers(response.data.items); // Не забыть передать этот метод через props
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.props.usersPage.map(u => ( // Используйте usersPage, а не items
//           <div key={u.id}>
//             <div>
//               <div>
//                 <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
//               </div>
//               <div>
//                 {u.followed ? (
//                   <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
//                 ) : (
//                   <button onClick={() => this.props.follow(u.id)}>Follow</button>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div>
//                 <div>{u.name}</div>
//                 <div>{u.status}</div>
//               </div>
//               <div>
//                 {/* <div>{'u.location.country'}</div>
//                 <div>{'u.location.city'}</div> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// };

// export default Users;