export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <h3 className="UserInfo__name">{user.name}</h3>
    <a className="UserInfo__email" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </div>
);
