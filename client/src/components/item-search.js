import React, { useState, useCallback } from 'react'
import AutoComplete from 'react-autocomplete'
import axios from 'axios'
import debounce from 'lodash/debounce'
import styled from 'styled-components'
import TextBox from '../style/textbox'
import { apiUrl } from '../config'

const MenuItem = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  &.isHighlighted {
    background-color: lightgoldenrodyellow;
  }
`

const Menu = styled.div`
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top: none;
  border: 1px solid #e2d8f0;
  box-shadow: none;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 0;
  font-size: 90%;
  position: fixed;
  overflow: auto;
  max-height: 50%;
`

const ItemSearch = ({ onSelect = () => {} }) => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const search = useCallback(
    debounce(val => {
      setLoading(true)
      if (val && val.length > 1) {
        const getItems = async () => {
          try {
            const result = await axios.get(
              // `https://actor-overlap.azurewebsites.net/api/itemSearch?search=${value}`
              `${apiUrl}/itemSearch?search=${val}`
            )
            // console.log(result)
            setData(result.data.data)
            setLoading(false)
          } catch (err) {
            console.log(err)
          }
        }
        getItems()
      } else {
        setData([])
        setLoading(false)
      }
    }, 600),
    []
  )

  return (
    <AutoComplete
      getItemValue={item => item.id}
      items={data}
      value={value}
      onChange={(e, v) => {
        search(v)
        setValue(v)
      }}
      wrapperStyle={{
        display: 'block'
      }}
      renderMenu={(items, value, style) =>
        items.length ? <Menu style={style} children={items} /> : <div />
      }
      menuStyle={
        {
          // TODO: don't cheat, let it flow to the bottom
        }
      }
      renderInput={props => {
        const { ref, ...rest } = props
        return (
          <TextBox
            {...rest}
            ref={ref}
            style={{ textAlign: 'center' }}
            placeholder="Type a movie/show"
            value={value}
          />
        )
      }}
      onSelect={(val, item) => {
        setValue(item.title)
        onSelect({
          title: item.title,
          id: item.id,
          image: item.image
        })
      }}
      renderItem={(item, isHighlighted) => (
        <MenuItem
          key={item.id}
          className={isHighlighted ? 'isHighlighted' : ''}
        >
          <span>{item.title}</span>
          <span
            style={{
              marginLeft: 10
            }}
          >
            {item.year} - {item.type && item.type.replace('feature', 'movie')}
          </span>
        </MenuItem>
      )}
    />
  )
}

export default ItemSearch
