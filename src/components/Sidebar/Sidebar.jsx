import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Pizzas</SidebarLink>
				<SidebarLink to='/'>Desserts</SidebarLink>
				<SidebarLink to='/'>Full Menu</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Order Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
}

export default Sidebar;
