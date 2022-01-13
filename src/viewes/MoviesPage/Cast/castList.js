const CastList = ({ castArr }) => {
  return castArr.map(item => (
    <li key={item.cast_id}>
      <div>
        {item.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path} `}
            width="100px"
          />
        )}
      </div>
      <h3>{item.name}</h3>
    </li>
  ));
};
export { CastList };
