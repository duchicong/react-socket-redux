import { ItemUserChatBox } from 'component';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersAction } from 'redux/users';
import { selectUsers, selectLoading } from 'redux/users/selectors';

const NavbarChatBox = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(usersAction.searchByNickname(value));
  }
  console.log('uers ', users)

  const userRenderer = React.useMemo(() => {
    return users.map((item, index: number) => (
      <ItemUserChatBox
        key={index}
        src={item.urlImage}
        nickname={item.nickname}
        status={item.status}
      />
    ))
  }, [users]);

  let content: React.ReactNode;

  if (loading) content = <>Loading...</>
  else if (users.length === 0) content = <>No users!</>
  content = userRenderer;

  return (
    <aside>
		<header>
			<input type="text" placeholder="search" onChange={handleChange} />
		</header>
		<ul>
			{content}
		</ul>
	</aside>
  )
}

export default NavbarChatBox;
