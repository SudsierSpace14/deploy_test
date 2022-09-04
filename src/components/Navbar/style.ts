import styled from 'styled-components'

export const Nav = styled.nav`
    text-align: center;
`

export const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
`

export const Menu = styled.li`
    display: inline-block;
    padding: 10px;
    flex: 1;
    background: #fff;
    transition: background 0.2s;
    cursor: pointer;
    border-left: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;

    &:focus{
        outline: 2px solid #b30000;
        background: #b30000;
        outline-offset: 1px;
        border: none;
        z-index: 1;
    }

    &:hover{
        background: #b30000;
        border: none;
    }

    &:hover a{
        color: #fff;
    }
    &:focus a{
        color: #fff;
    }
`