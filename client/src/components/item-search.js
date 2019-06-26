import React, { useState, useCallback } from 'react'
import AutoComplete from 'react-autocomplete'
import axios from 'axios'
import debounce from 'lodash/debounce'
import styled from 'styled-components'

const MenuItem = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  &.isHighlighted {
    background-color: lightgoldenrodyellow;
  }
`

const ItemSearch = ({ onSelect = () => {} }) => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const search = useCallback(
    debounce(val => {
      setLoading(true)
      if (val) {
        const getItems = async () => {
          try {
            const result = await axios.get(
              // `https://actor-overlap.azurewebsites.net/api/itemSearch?search=${value}`
              `http://localhost:7071/api/itemSearch?search=${val}`
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
    <>
      <AutoComplete
        getItemValue={item => item.id}
        items={data}
        value={value}
        onChange={(e, v) => {
          search(v)
          setValue(v)
        }}
        onSelect={(val, item) => {
          setValue(item.title)
          onSelect(val)
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
              {item.year} - {item.type.replace('feature', 'movie')}
            </span>
          </MenuItem>
        )}
      />
    </>
  )
}

export default ItemSearch
