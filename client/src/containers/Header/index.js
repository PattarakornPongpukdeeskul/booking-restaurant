import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { deleteAuth } from '../../services'
import {
  loginState,
  restaurantListState,
  placeSelectedId,
  showPlaceCategories,
  searchState,
  paginationState
} from '../../recoil/atom'
import jwt from 'jwt-decode'
import { Style } from './style'
import { ReactComponent as IconArrowDown } from '../../asset/svg/icon-arrow-down.svg'

export const Header = () => {
  const [accessToken, setAccessToken] = useRecoilState(loginState)
  const userData = jwt(accessToken)
  const menus = [{ title: 'LOGOUT', onClick: () => logout() }]
  const [showOption, setShowOption] = useState('hide')
  const setRestaurantList = useSetRecoilState(restaurantListState)
  const setPlaceSelectedId = useSetRecoilState(placeSelectedId)
  const setShowPlaceCategories = useSetRecoilState(showPlaceCategories)
  const setSearchState = useSetRecoilState(searchState)
  const setPaginationState = useSetRecoilState(paginationState)

  const logout = async () => {
    const { data } = await deleteAuth(accessToken)

    if (data) {
      setAccessToken('')
      setRestaurantList([])
      setPlaceSelectedId('')
      setShowPlaceCategories({
        isSearch: false,
        value: 'Restaurant',
        valueSearch: ''
      })
      setSearchState('')
      setPaginationState(1)
    }
  }
  return (
    <Style>
      <header>
        <div className="header-content">
          <div>
            <button
              className="dropdown-button"
              onClick={
                showOption === 'hide' ? () => setShowOption('show') : () => setShowOption('hide')
              }>
              {userData.name}
              <IconArrowDown />
            </button>
            <ul className={`dropdown-content ${showOption}`}>
              {menus.map((menu) => {
                return (
                  <li className={`category-option`} key={menu.title} onClick={menu.onClick}>
                    {menu.title}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </header>
    </Style>
  )
}
