import { NavbarMenus } from "../../api"
import { Menu, Nav, NavUl } from "./style"

export function Navbar(){
    return(
        <Nav>
            <NavUl>
                {NavbarMenus.map((menu, id) => (
                    <Menu key={id} tabIndex={1}>
                        <a href="" tabIndex={-1}>{menu}</a>
                    </Menu>
                ))}
            </NavUl>
        </Nav>
    )
}